// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

// Rate limiting store (in-memory, per IP)
// In production, consider using Redis or a database
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Clean up old rate limit entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  // Reset if window expired
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, timestamp: now });
    return true;
  }

  // Check if limit exceeded
  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  // Increment count
  record.count++;
  return true;
}

async function sendEmail(data: {
  nome: string;
  email: string;
  servizio: string;
  messaggio: string;
}) {
  // TODO: Configure your email service here
  // Options:
  // 1. Resend: https://resend.com/docs/send-with-nodejs
  // 2. SendGrid: https://docs.sendgrid.com/for-developers/sending-email/nodejs
  // 3. Nodemailer with SMTP: https://nodemailer.com/

  // Example with Resend (uncomment when configured):
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Studio <noreply@yourdomain.com>',
    to: process.env.CONTACT_EMAIL || 'your@email.com',
    subject: `Nuovo contatto: ${data.servizio}`,
    html: `
      <h2>Nuovo messaggio dal form contatti</h2>
      <p><strong>Nome:</strong> ${data.nome}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Servizio:</strong> ${data.servizio}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${data.messaggio}</p>
    `
  });
  */

  // For now, just log the data (remove in production)
  console.log('📧 New contact form submission:', data);

  // Simulate email send delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return { success: true };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Get client IP for rate limiting
    const ip = clientAddress || 'unknown';

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

    // Send email
    await sendEmail({ nome, email, servizio, messaggio });

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
