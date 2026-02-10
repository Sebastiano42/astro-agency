# Changelog - Rebranding & Redesign

## Data: 10 Febbraio 2026

---

## FASE 1: Rebranding Globale (Studio Digitale → Sebastiano Moniaci)

### Identita e Contatti
| Campo | Prima | Dopo |
|-------|-------|------|
| Brand | Studio Digitale / Studio. | Sebastiano Moniaci / Sebastiano. |
| Email | hello@studio.com | info@sebastianomoniaci.it |
| Telefono | +39 02 1234 5678 | Rimosso |
| Sede | Milano / Milano - Roma - Remote | Rovigo, Italia |
| P.IVA | P.IVA 12345678901 | Rimosso |
| Social slug | studiodigital / studio-digital | sebastianomoniaci |
| Schema.org | @type: Organization | @type: Person |
| Blog author | Studio Team | Sebastiano Moniaci |
| Logo nav | "Studio" | "Sebastiano" |
| Logo footer | "Studio." | "Sebastiano." |
| Copyright | Studio Digital | Sebastiano Moniaci |

### File modificati per il rebranding
- `src/layouts/Layout.astro` - schema, meta, default title/description
- `src/components/Navigation.astro` - logo, email, social URL
- `src/components/Footer.astro` - brand, email, social, rimossi telefono e P.IVA
- `src/components/ContactForm.astro` - "Contattaci" → "Contattami"
- `src/pages/index.astro` - description, testi hero
- `src/pages/chi-siamo.astro` - titolo, descrizione, manifesto
- `src/pages/contatti.astro` - dati contatto
- `src/pages/portfolio.astro` - description
- `src/pages/servizi.astro` - description
- `src/pages/blog.astro` - titolo
- `src/pages/blog/[slug].astro` - schema author
- `src/data/blog-posts.ts` - author
- `src/pages/privacy.astro` - riferimenti titolare
- `src/pages/cookie-policy.astro` - riferimenti
- Tutte le 6 subpage servizi - schema provider

---

## FASE 2: Conversione Plurale → Singolare

Tutti i testi del sito convertiti dalla forma "agenzia" (plurale) alla forma "freelancer" (singolare):

- "Costruiamo" → "Costruisco"
- "Siamo" → "Sono"
- "Crediamo" → "Credo"
- "Rifiutiamo" → "Rifiuto"
- "Abbracciamo" → "Abbraccio"
- "Le nostre" → "Le mie"
- "Il nostro" → "Il mio"
- "Contattaci" → "Contattami"
- "Scrivici" → "Scrivimi"
- "Progettiamo/Sviluppiamo/Traduciamo" → "Progetto/Sviluppo/Traduco"
- "Uno studio di design" → "Freelance web designer"
- "Risponderemo" → "Rispondo"
- Tutti i verbi nelle pagine servizi convertiti al singolare

---

## FASE 3: Fix Link e Contenuti

### Homepage servizi array
- "Brand Identity" (link generico /servizi) → "E-commerce" (link a /servizi/ecommerce)

### Pagina servizi
- "Brand Strategy" → "Digital Ads" con descrizione corretta (la pagina ads.astro contiene advertising)

### Anno
- "Available for 2024" → "Available for 2026"

### Stats
- "150+" → "50+" (realistico per freelancer)
- "Retention Rate" → "Clienti Soddisfatti"

---

## FASE 4: 3 Nuove Sezioni Homepage

Aggiunte 3 sezioni complete in `src/pages/index.astro`:

### 4.1 - Portfolio Preview
- 3 card progetto con gradient placeholder colorati e icona immagine SVG
- Titolo "Lavori Recenti" + link "Vedi tutti i lavori" → /portfolio
- Card con `.glow-border`, aspect-video, categoria, titolo
- Hover con gradient opacity, translate e bottom-border animation

### 4.2 - Come Lavoro
- 4 step: Discovery → Design → Sviluppo → Lancio
- Card glassmorphism con number badge (01-04)
- Ogni card con colore accento diverso (blu, viola, verde, arancio)
- Glow gradient su hover + bottom-border animata
- Badge "Processo" sopra il titolo
- Grid responsiva md:grid-cols-2 lg:grid-cols-4

### 4.3 - Testimonials
- 3 testimonial con quote, nome, ruolo, 5 stelle
- Card glassmorphism (`bg-white/[0.03] backdrop-blur-sm`)
- Virgolettone decorativo gigante (`text-8xl text-white/[0.05]`)
- Stelle in amber-500
- Avatar con iniziale del nome
- Background con radial gradient

### Ordine sezioni homepage finale
1. Hero
2. Text Marquee (Strategy - Design - Development - Growth)
3. Servizi (Competenze)
4. Tech & Design Stack Marquee
5. Portfolio Preview (Lavori Recenti)
6. Stats
7. Come Lavoro
8. Testimonials (Dicono di Me)
9. CTA + Contact Form
10. (Marquee rimosso dal fondo)

---

## FASE 5: Bug Fix Pagina Contatti

### Problema 1: Link "Sede" cliccabile
- Il metodo contatto "Sede: Rovigo, Italia" aveva `href: '#'` che lo rendeva un link rotto
- Cambiato `href: '#'` → `href: null`
- Template aggiornato con rendering condizionale: se `href` esiste → `<a>`, altrimenti → `<span>`

### Problema 2: Sovrapposizione elementi su lg
- Griglia interna (metodi + terminale) causava overflow su breakpoint lg (1024px)
- Griglia cambiata: `md:grid-cols-2` → `md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2`
- Terminale decorativo: `hidden md:block` → `hidden md:block lg:hidden xl:block`
- Font email ridotto: `text-2xl md:text-3xl` → `text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl`

---

## FASE 6: Riposizionamento e Restyling Marquee Tech

### Posizione
- Marquee spostato da fondo pagina (dopo CTA) a dopo la sezione Servizi (prima di Portfolio Preview)

### Loghi in bianco e nero
- Tutti i loghi SimpleIcons CDN: colori originali → `FFFFFF` (bianco)
  - php, javascript, html5, tailwindcss, bootstrap, astro, wordpress, woo, figma, sketch
- Loghi locali (CSS, Magento, Illustrator, Photoshop): aggiunto filtro `brightness-0 invert`
- Opacita ridotta da `opacity-70` a `opacity-40` per effetto piu elegante

---

## FASE 7: Anti-Sillabazione e Fix Tipografia

### CSS Globale (`src/styles/global.css`)

**Body:**
```css
hyphens: none;
-webkit-hyphens: none;
-ms-hyphens: none;
```
Disabilita la sillabazione automatica su tutti i browser.

**Classe `.hero-text`:**
| Proprieta | Prima | Dopo |
|-----------|-------|------|
| Mobile (< 640px) | text-5xl (48px) | text-3xl (30px) |
| sm (640px+) | text-7xl (72px) | text-5xl (48px) |
| md (768px+) | text-8xl (96px) | text-6xl (60px) |
| lg (1024px+) | text-9xl (128px) | text-7xl (72px) |
| xl (1280px+) | - | text-8xl (96px) |
| line-height | 0.9 | 0.95 |
| word-break | break-word | rimosso |

**Pagine con `.hero-text`:**
- index.astro → "COSTRUISCO / IL FUTURO / DIGITALE."
- chi-siamo.astro → "SONO / SEBASTIANO."
- portfolio.astro → "LAVORI / SELEZIONATI."
- servizi.astro → "SERVIZI / ESCLUSIVI."
- blog.astro → "IL MIO / BLOG."
- privacy.astro → "PRIVACY / POLICY"
- cookie-policy.astro → "COOKIE / POLICY"

### H1 pagine servizi
Tutte le 6 subpage + contatti: `text-5xl md:text-7xl lg:text-8xl` → `text-4xl sm:text-5xl md:text-7xl lg:text-8xl`

### Contatti email
Rimosso `break-all` dal link email. Font ridotto per evitare overflow su mobile.

---

## Riepilogo File Modificati

| File | Fasi |
|------|------|
| `src/styles/global.css` | 7 |
| `src/layouts/Layout.astro` | 1 |
| `src/components/Navigation.astro` | 1 |
| `src/components/Footer.astro` | 1 |
| `src/components/ContactForm.astro` | 1, 2 |
| `src/pages/index.astro` | 1, 2, 3, 4, 6 |
| `src/pages/chi-siamo.astro` | 1, 2 |
| `src/pages/contatti.astro` | 1, 2, 5, 7 |
| `src/pages/portfolio.astro` | 1 |
| `src/pages/servizi.astro` | 1, 2, 3 |
| `src/pages/blog.astro` | 1, 2 |
| `src/pages/blog/[slug].astro` | 1, 2 |
| `src/data/blog-posts.ts` | 1, 2 |
| `src/pages/privacy.astro` | 1, 2 |
| `src/pages/cookie-policy.astro` | 1, 2 |
| `src/pages/servizi/ads.astro` | 1, 2, 7 |
| `src/pages/servizi/ecommerce.astro` | 1, 2, 7 |
| `src/pages/servizi/performance.astro` | 1, 2, 7 |
| `src/pages/servizi/seo.astro` | 1, 2, 7 |
| `src/pages/servizi/sviluppo-web.astro` | 1, 2, 7 |
| `src/pages/servizi/web-design.astro` | 1, 2, 7 |

**Totale: 21 file modificati, 0 errori di build, 18 pagine generate.**
