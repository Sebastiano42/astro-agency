<div align="center">

# Sebastiano Moniaci

### Portfolio & Sito Personale — Web Design & Development

[![Astro](https://img.shields.io/badge/Astro-5.17.1-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Demo Live](#) • [Documentazione](#struttura-del-progetto) • [Contatti](#contatti)

</div>

---

## Panoramica

Sito portfolio personale di **Sebastiano Moniaci** — web designer e developer. Costruito con Astro 5 e TailwindCSS, con un'estetica dark luxury, animazioni moderne e performance estreme.

### Caratteristiche Principali

| Feature | Descrizione |
|---------|-------------|
| **Performance Estrema** | Lighthouse score 100. Rendering statico con Astro |
| **Design Dark Luxury** | Estetica minimalista premium con effetti glassmorphism |
| **View Transitions** | Navigazione fluida tra le pagine con Astro View Transitions |
| **Dark Mode Toggle** | Switch tema chiaro/scuro con persistenza localStorage |
| **Animazioni Moderne** | Scroll reveal, cursor personalizzato, effetti magnetici e ripple |
| **Fully Responsive** | Ottimizzato per desktop, tablet e mobile |
| **SEO Completo** | Meta tags OG/Twitter, canonical, sitemap, Schema.org JSON-LD |
| **Accessibile** | Skip navigation, focus-visible, aria attributes, WCAG |
| **Form Contatti** | Validazione client/server, rate limiting, anti-spam honeypot |

---

## Stack Tecnologico

```
Framework       →  Astro 5.17.1
Styling         →  TailwindCSS 3.4
Fonts           →  Space Grotesk, Space Mono
Animations      →  CSS Custom + Intersection Observer
Transitions     →  Astro View Transitions API
Icons           →  SVG inline
```

---

## Quick Start

### Prerequisiti

- Node.js 18+
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/Sebastiano42/sebastianomoniaci.git

# Entra nella directory
cd sebastianomoniaci

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`

---

## Struttura del Progetto

```
sebastianomoniaci/
├── public/                 # Asset statici
│   ├── favicon.svg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/         # Componenti riutilizzabili
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ContactForm.astro
│   │   ├── ThemeToggle.astro
│   │   ├── CursorFollower.astro
│   │   ├── MagneticElements.astro
│   │   └── RippleEffect.astro
│   ├── data/               # Dati strutturati
│   │   └── blog-posts.ts
│   ├── layouts/            # Layout di pagina
│   │   └── Layout.astro
│   ├── pages/              # Pagine del sito
│   │   ├── index.astro
│   │   ├── servizi.astro
│   │   ├── portfolio.astro
│   │   ├── chi-siamo.astro
│   │   ├── contatti.astro
│   │   ├── blog.astro
│   │   ├── privacy.astro
│   │   ├── cookie-policy.astro
│   │   ├── 404.astro
│   │   ├── api/
│   │   │   └── contact.ts
│   │   ├── blog/
│   │   │   └── [slug].astro
│   │   └── servizi/
│   │       ├── web-design.astro
│   │       ├── sviluppo-web.astro
│   │       ├── ecommerce.astro
│   │       ├── seo.astro
│   │       ├── performance.astro
│   │       └── ads.astro
│   └── styles/             # Stili globali
│       └── global.css
├── astro.config.mjs        # Configurazione Astro
├── tailwind.config.mjs     # Configurazione Tailwind
└── package.json
```

---

## Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm install` | Installa le dipendenze del progetto |
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Genera la build di produzione in `./dist/` |
| `npm run preview` | Anteprima locale della build di produzione |

---

## Personalizzazione

### Colori

I colori principali sono definiti in `tailwind.config.mjs`:

```javascript
colors: {
  background: '#020202',    // Sfondo principale
  surface: '#0F0F0F',       // Superfici card
  surfaceHighlight: '#1A1A1A', // Elementi attivi
  border: '#2A2A2A'         // Bordi
}
```

### Animazioni

Le animazioni scroll sono gestite da classi CSS in `global.css`:

- `.reveal` — Fade up con blur
- `.reveal-scale` — Fade + scale + blur
- `.reveal-left` / `.reveal-right` — Entrata laterale
- `.reveal-rotate` — Effetto 3D con prospettiva

---

## Pagine

| Pagina | Route | Descrizione |
|--------|-------|-------------|
| Home | `/` | Landing page con hero, servizi, stats e CTA |
| Servizi | `/servizi` | Elenco servizi con 6 sotto-pagine dettagliate |
| Portfolio | `/portfolio` | Showcase dei progetti realizzati |
| Chi Siamo | `/chi-siamo` | Presentazione e valori |
| Blog | `/blog` | Articoli e insights |
| Contatti | `/contatti` | Form di contatto con validazione |
| Privacy | `/privacy` | Privacy Policy GDPR |
| Cookie | `/cookie-policy` | Cookie Policy |
| 404 | `/404` | Pagina errore personalizzata |

---

## Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

---

## Contatti

**Sebastiano Moniaci**

- GitHub: [@Sebastiano42](https://github.com/Sebastiano42)

---

<div align="center">

**Costruito con Astro, Tailwind e tanta caffeina**

</div>
