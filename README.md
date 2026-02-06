<div align="center">

# 🚀 Studio Digitale

### Agenzia Web Premium — Design & Development

[![Astro](https://img.shields.io/badge/Astro-5.17.1-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Demo Live](#) • [Documentazione](#struttura-del-progetto) • [Contatti](#contatti)

</div>

---

## ✨ Panoramica

**Studio Digitale** è un template web premium per agenzie creative, studi di design e freelancer. Costruito con Astro e TailwindCSS, offre un'esperienza utente fluida con animazioni moderne e un design dark luxury.

### 🎯 Caratteristiche Principali

| Feature | Descrizione |
|---------|-------------|
| ⚡ **Performance Estrema** | Lighthouse score 100. Rendering statico con Astro |
| 🎨 **Design Dark Luxury** | Estetica minimalista premium con effetti glassmorphism |
| ✨ **Animazioni Moderne** | Scroll reveal con blur, scale e transizioni fluide |
| 📱 **Fully Responsive** | Ottimizzato per desktop, tablet e mobile |
| 🔍 **SEO Ready** | Meta tag, sitemap e struttura ottimizzata per i motori di ricerca |
| ♿ **Accessibile** | Conforme alle linee guida WCAG |

---

## 📸 Preview

<div align="center">

| Homepage | Servizi |
|----------|---------|
| Dark theme con hero animato | Card con gradient glow effects |

| Portfolio | Contatti |
|-----------|----------|
| Griglia progetti premium | Form moderno con validazione |

</div>

---

## 🛠️ Stack Tecnologico

```
Framework       →  Astro 5.17.1
Styling         →  TailwindCSS 3.4
Fonts           →  Space Grotesk, Space Mono
Animations      →  CSS Custom + Intersection Observer
Icons           →  SVG inline
```

---

## 🚀 Quick Start

### Prerequisiti

- Node.js 18+ 
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/Sebastiano42/astro-agency.git

# Entra nella directory
cd astro-agency

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`

---

## 📁 Struttura del Progetto

```
astro-agency/
├── public/                 # Asset statici
│   └── favicon.svg
├── src/
│   ├── components/         # Componenti riutilizzabili
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── ContactForm.astro
│   ├── layouts/            # Layout di pagina
│   │   └── Layout.astro
│   ├── pages/              # Pagine del sito
│   │   ├── index.astro
│   │   ├── servizi.astro
│   │   ├── portfolio.astro
│   │   ├── chi-siamo.astro
│   │   └── contatti.astro
│   └── styles/             # Stili globali
│       └── global.css
├── astro.config.mjs        # Configurazione Astro
├── tailwind.config.mjs     # Configurazione Tailwind
└── package.json
```

---

## 🧞 Comandi Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm install` | Installa le dipendenze del progetto |
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Genera la build di produzione in `./dist/` |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run astro check` | Verifica errori TypeScript/Astro |

---

## 🎨 Personalizzazione

### Colori

I colori principali sono definiti in `tailwind.config.mjs`:

```javascript
colors: {
  background: '#020202',    // Sfondo principale
  surface: '#0A0A0A',       // Superfici card
  surfaceHighlight: '#111', // Superfici evidenziate
  border: '#1a1a1a'         // Bordi
}
```

### Animazioni

Le animazioni scroll sono gestite da classi CSS in `global.css`:

- `.reveal` — Fade up con blur
- `.reveal-scale` — Fade + scale + blur
- `.reveal-left` / `.reveal-right` — Entrata laterale
- `.reveal-rotate` — Effetto 3D con prospettiva

---

## 📄 Pagine

| Pagina | Route | Descrizione |
|--------|-------|-------------|
| Home | `/` | Landing page principale con hero, servizi e CTA |
| Servizi | `/servizi` | Elenco completo dei servizi offerti |
| Portfolio | `/portfolio` | Showcase dei progetti realizzati |
| Chi Siamo | `/chi-siamo` | Presentazione del team e valori aziendali |
| Contatti | `/contatti` | Form di contatto e informazioni |

---

## 🤝 Contribuire

I contributi sono benvenuti! Per contribuire:

1. Fai un Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/nuova-feature`)
3. Committa le modifiche (`git commit -m 'Aggiunta nuova feature'`)
4. Pusha sul branch (`git push origin feature/nuova-feature`)
5. Apri una Pull Request

---

## 📝 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

---

## 📬 Contatti

**Sebastiano Moniaci**

- GitHub: [@Sebastiano42](https://github.com/Sebastiano42)
- Email: hello@studio.com

---

<div align="center">

**Costruito con ❤️ e ☕ in Italia**

⭐ Se questo progetto ti è utile, lascia una stella!

</div>
