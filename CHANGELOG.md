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

---

## [2026-02-13] - Audit Tecnico: Performance, Grafica & Accessibilita

### FASE 8: Ottimizzazioni Performance & Pulizia Codice

#### Font & Asset

- **Font ottimizzati:** rimosso font Inter (dichiarato ma mai caricato), unificato tutto su Space Grotesk come body font. Caricamento reso non-blocking via `preload` + `media="print"` + `onload` (`Layout.astro`, `global.css`)
- **Font weights corretti:** aggiunti pesi 500 (medium) e 600 (semibold) mancanti a Space Grotesk. Nota: `font-black` (900) mappa automaticamente a 700 poiche Space Grotesk non ha pesi superiori (`Layout.astro`)
- **Icone SVG localizzate:** scaricate 22 icone SVG da cdn.simpleicons.org in `src/assets/logos/`, eliminando ~20 richieste HTTP esterne (`TechStackMarquee.astro`, `chi-siamo.astro`, `ecommerce-luxury.astro`)

#### Prefetch & Navigazione

- **Prefetch ottimizzato:** disattivato `prefetchAll`, strategia cambiata da `viewport` a `hover` con `data-astro-prefetch` sui link di navigazione (`astro.config.mjs`, `Navigation.astro`)
- **Migrazione a ClientRouter:** sostituito `ViewTransitions` (deprecato in Astro 5) con `ClientRouter` da `astro:transitions`. Rimossi ~50 righe di workaround mobile per View Transitions (`Layout.astro`, `global.css`)

#### RAF & Observer

- **CursorFollower RAF intelligente:** il loop `requestAnimationFrame` si ferma dopo 3 frame inattivi e riparte al mousemove, evitando consumo CPU a mouse fermo (`CursorFollower.astro`)
- **CursorFollower MutationObserver debounced:** aggiunto debounce da 200ms al MutationObserver che monitorava `document.body` con `subtree: true` (`CursorFollower.astro`)
- **MagneticElements RAF ottimizzato:** stesso pattern idle-frames applicato. Il loop si ferma quando nessun elemento magnetico e in movimento e riparte su mouseenter/mouseleave (`MagneticElements.astro`)

#### Pulizia Codice

- **ThemeToggle rimosso:** il toggle dark/light esisteva ma nessuna classe `dark:` era implementata (sito dark-only). Eliminato componente, importazioni e `darkMode: 'class'` da Tailwind (`ThemeToggle.astro`, `Navigation.astro`, `tailwind.config.mjs`)
- **RippleEffect rimosso:** componente importato nel Layout ma mai usato in nessuna pagina (`RippleEffect.astro`)
- **Welcome.astro eliminato:** componente starter di default Astro, mai importato (`Welcome.astro`)
- **8 classi CSS inutilizzate rimosse:** `shimmer`, `hover-lift`, `hover-glow`, `text-hover-gradient`, `bg-grid-pattern-lg`, `reveal-left`, `reveal-right`, `reveal-rotate`, `text-balance` (`global.css`)
- **Classi no-underline rimosse:** eliminate tutte le classi `no-underline` ridondanti - Tailwind non applica underline di default (`index.astro`, `Navigation.astro`, `Footer.astro`)

---

### FASE 9: Bug Fix CSS & SEO

#### CSS

- **btn-secondary definito:** la pagina 404 usava `btn-secondary` mai definito. Aggiunta classe con stile coerente al design system (`global.css`)
- **animate-pulse-slow definito:** il badge hero usava `animate-pulse-slow` non registrato in Tailwind. Aggiunta animazione con durata 4s (`tailwind.config.mjs`)
- **Conflitto transition risolto:** in contatti.astro un link aveva sia `transition-colors` che `transition-transform` (la seconda sovrascriveva la prima). Unificati in `transition-all duration-200` (`contatti.astro`)
- **cursor:none sicuro:** la regola `cursor: none !important` ora si attiva solo tramite classe `html.custom-cursor` aggiunta via JS, evitando che un errore JS lasci l'utente senza cursore nativo (`global.css`, `CursorDot.astro`)

#### SEO

- **Title pattern corretto:** Home mostra "Sebastiano Moniaci - Web Designer & Developer a Rovigo", le altre pagine usano il pattern "{Titolo} | Sebastiano Moniaci" (`Layout.astro`)
- **ogType blog corretto:** i blog post ora dichiarano `ogType="article"` invece del default `"website"` (`[slug].astro`)
- **Breadcrumb leggibile:** il breadcrumb dei post mostra il titolo leggibile (es. "Web Design Trends 2026") invece dello slug URL raw (es. "web-design-trends-2026") (`[slug].astro`)
- **Blog sincronizzato:** la pagina blog ora usa `blogPosts` da `blog-posts.ts` come unica fonte dati, con icone SVG per categoria e tempi di lettura (`blog.astro`)

---

### FASE 10: Accessibilita

- **Focus trap mobile menu:** aggiunto focus trap completo: Tab cicla tra gli elementi interni al menu, Shift+Tab torna indietro, Escape chiude il menu e ripristina il focus sul toggle. Focus iniziale impostato sul bottone chiudi (`Navigation.astro`)
- **aria-modal aggiunto:** il dialog del menu mobile ora dichiara `aria-modal="true"` (`Navigation.astro`)
- **aria-current="page":** i link di navigazione attivi ricevono `aria-current="page"` dinamicamente ad ogni cambio pagina, compatibile con `transition:persist` (`Navigation.astro`)

---

### File Eliminati (Fasi 8-10)

- `src/components/ThemeToggle.astro`
- `src/components/RippleEffect.astro`
- `src/components/Welcome.astro`

### File Aggiunti (Fasi 8-10)

- `src/assets/logos/*.svg` (22 icone SVG locali: php, javascript, html5, tailwindcss, bootstrap, astro, wordpress, woocommerce, figma, sketch, react, shopify, typescript + varianti colorate)

### File Modificati (Fasi 8-10)

| File | Modifiche |
|------|-----------|
| `astro.config.mjs` | Prefetch strategy hover |
| `tailwind.config.mjs` | Rimosso darkMode, font sans → Space Grotesk, animate-pulse-slow |
| `src/layouts/Layout.astro` | ClientRouter, font loading non-blocking, title pattern |
| `src/styles/global.css` | cursor:none JS-driven, btn-secondary, pulizia 8 classi CSS |
| `src/components/Navigation.astro` | Focus trap, aria-modal, aria-current, prefetch links |
| `src/components/Footer.astro` | Rimosso no-underline |
| `src/components/CursorFollower.astro` | Debounce MutationObserver + idle RAF |
| `src/components/CursorDot.astro` | Classe html.custom-cursor via JS |
| `src/components/MagneticElements.astro` | Idle RAF loop con auto-stop/restart |
| `src/components/TechStackMarquee.astro` | SVG locali con lazy loading |
| `src/pages/index.astro` | Rimosso no-underline |
| `src/pages/contatti.astro` | Fix conflitto transition-colors/transform |
| `src/pages/blog.astro` | Sync con blog-posts.ts, icone SVG categorie |
| `src/pages/blog/[slug].astro` | ogType article, breadcrumb con titolo |
| `src/pages/chi-siamo.astro` | SVG locali per tech stack |
| `src/pages/portfolio/ecommerce-luxury.astro` | SVG locali |

**Totale Fasi 8-10: 16 file modificati, 3 file eliminati, 22 file aggiunti, 0 errori di build.**
