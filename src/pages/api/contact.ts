// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Rate limiting with timestamp-based sliding window
// Note: on Vercel serverless this resets on cold starts,
// but still protects against burst abuse within a single instance
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitStore.get(ip) || [];

  // Remove expired entries
  const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

  if (valid.length >= MAX_REQUESTS) {
    return false;
  }

  valid.push(now);
  rateLimitStore.set(ip, valid);
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Get client IP for rate limiting
    const ip = clientAddress || request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Troppi tentativi. Riprova tra un\'ora.',
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse form data
    const formData = await request.formData();

    // Get fields
    const nome = formData.get('nome')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim().toLowerCase() || '';
    const servizio = formData.get('servizio')?.toString() || '';
    const messaggio = formData.get('messaggio')?.toString().trim() || '';

    // Honeypot field (should be empty)
    const honeypot = formData.get('website')?.toString() || '';
    if (honeypot) {
      // Bot detected, return success but don't send email
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Messaggio inviato con successo!',
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validation
    const errors: string[] = [];

    if (!nome || nome.length < 2) {
      errors.push('Il nome deve contenere almeno 2 caratteri');
    }

    if (nome.length > 100) {
      errors.push('Il nome è troppo lungo (max 100 caratteri)');
    }

    if (!email) {
      errors.push('L\'email è obbligatoria');
    } else if (!EMAIL_REGEX.test(email)) {
      errors.push('L\'email non è valida');
    }

    if (!servizio) {
      errors.push('Seleziona un servizio');
    }

    if (!messaggio) {
      errors.push('Il messaggio è obbligatorio');
    }

    if (messaggio && messaggio.length < 10) {
      errors.push('Il messaggio deve contenere almeno 10 caratteri');
    }

    if (messaggio && messaggio.length > 2000) {
      errors.push('Il messaggio è troppo lungo (max 2000 caratteri)');
    }

    // Return validation errors
    if (errors.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: errors.join('. '),
          errors,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send email with Resend
    const apiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'info@sebastianomoniaci.it';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Servizio email non configurato. Contattami direttamente a info@sebastianomoniaci.it',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Sito Web <noreply@sebastianomoniaci.it>',
      to: contactEmail,
      replyTo: email,
      subject: `Nuovo contatto: ${escapeHtml(servizio)} - ${escapeHtml(nome)}`,
      html: `
        <h2>Nuovo messaggio dal form contatti</h2>
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Servizio:</strong> ${escapeHtml(servizio)}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(messaggio).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #888; font-size: 12px;">Inviato dal form contatti di sebastianomoniaci.it</p>
      `
    });

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Messaggio inviato con successo! Ti risponderemo entro 24 ore.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in contact API:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Si è verificato un errore. Riprova più tardi.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
