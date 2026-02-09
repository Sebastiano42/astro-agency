// src/data/blog-posts.ts
// Blog posts data - in production, fetch from CMS, markdown files, or database

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'web-design-trends-2026',
    title: 'Web Design Trends 2026: Il Futuro È Minimalista',
    date: '2026-02-01',
    author: 'Studio Team',
    category: 'Design',
    readTime: '5 min',
    image: '/images/blog/design-trends.jpg',
    excerpt: 'Scopri i trend di design che domineranno il 2026: minimalismo brutale, tipografia bold e animazioni fluide.',
    content: `
      <h2>Il Minimalismo Evolve</h2>
      <p>Il web design del 2026 abbraccia un minimalismo più maturo e raffinato. Non si tratta più solo di rimuovere elementi, ma di creare esperienze essenziali che comunicano con precisione.</p>

      <h3>Trend Principali</h3>
      <ul>
        <li><strong>Brutalism Raffinato:</strong> Griglie asimmetriche con tipografia bold</li>
        <li><strong>Dark Mode First:</strong> Design pensati prima per il dark mode</li>
        <li><strong>Micro-animazioni:</strong> Feedback visivo sottile ma impattante</li>
        <li><strong>Glassmorphism 2.0:</strong> Effetti di vetro più sofisticati</li>
      </ul>

      <h2>Performance & Estetica</h2>
      <p>Il 2026 segna la fine del compromesso tra bellezza e velocità. I siti moderni devono essere sia visivamente stunning che ultra-performanti.</p>

      <blockquote>
        "Il miglior design è quello che non si nota, ma si sente." - Studio Team
      </blockquote>

      <h2>Conclusione</h2>
      <p>Il futuro del web design è un equilibrio perfetto tra forma e funzione, dove ogni pixel serve uno scopo preciso.</p>
    `
  },
  {
    slug: 'performance-web-optimization',
    title: 'Come Ottimizzare un Sito per Performance Estreme',
    date: '2026-01-20',
    author: 'Studio Team',
    category: 'Development',
    readTime: '8 min',
    image: '/images/blog/performance.jpg',
    excerpt: 'Tecniche avanzate per ottenere un Lighthouse score perfetto e tempi di caricamento sotto i 2 secondi.',
    content: `
      <h2>Performance È User Experience</h2>
      <p>Un sito lento è un sito morto. Gli utenti moderni hanno tolleranza zero per tempi di caricamento superiori a 3 secondi.</p>

      <h3>Le 5 Regole d'Oro</h3>
      <ol>
        <li><strong>Minimize JavaScript:</strong> Code splitting e lazy loading</li>
        <li><strong>Optimize Images:</strong> WebP, AVIF e lazy loading intelligente</li>
        <li><strong>Cache Strategy:</strong> Service workers e edge caching</li>
        <li><strong>Critical CSS:</strong> Inline critical path CSS</li>
        <li><strong>CDN:</strong> Distribuisci i contenuti globalmente</li>
      </ol>

      <h2>Tools Essenziali</h2>
      <ul>
        <li>Lighthouse CI per monitoraggio continuo</li>
        <li>WebPageTest per analisi dettagliate</li>
        <li>Chrome DevTools Performance panel</li>
      </ul>

      <h2>Real World Results</h2>
      <p>Seguendo queste tecniche, abbiamo ridotto i tempi di caricamento dei nostri progetti del 70% in media, con un impatto diretto sulle conversioni.</p>
    `
  },
  {
    slug: 'seo-strategy-2026',
    title: 'SEO Strategy 2026: Oltre i Keyword',
    date: '2026-01-15',
    author: 'Studio Team',
    category: 'SEO',
    readTime: '6 min',
    image: '/images/blog/seo.jpg',
    excerpt: 'La SEO moderna non è più solo keyword. Scopri come dominare la SERP con contenuti di valore e technical excellence.',
    content: `
      <h2>L'Era Post-Keyword</h2>
      <p>Google è sempre più intelligente. La SEO del 2026 premia chi crea valore reale, non chi riempie pagine di keyword.</p>

      <h3>I Nuovi Pilastri SEO</h3>
      <ul>
        <li><strong>Core Web Vitals:</strong> Performance tecnica impeccabile</li>
        <li><strong>E-E-A-T:</strong> Esperienza, Expertise, Autorità, Trust</li>
        <li><strong>User Intent:</strong> Soddisfare l'intento di ricerca</li>
        <li><strong>Structured Data:</strong> Schema markup ricco</li>
      </ul>

      <h2>Technical SEO Checklist</h2>
      <ol>
        <li>Sitemap XML ottimizzata</li>
        <li>Robots.txt configurato correttamente</li>
        <li>Canonical tags per evitare duplicati</li>
        <li>Open Graph e Twitter Cards</li>
        <li>Mobile-first indexing ready</li>
      </ol>

      <h2>Content Strategy</h2>
      <p>Crea contenuti che risolvono problemi reali. Google premia chi offre le migliori risposte, non chi scrive di più.</p>
    `
  }
];
