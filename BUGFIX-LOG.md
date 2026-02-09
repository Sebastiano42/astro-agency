# Bugfix Mobile - Astro Agency

## Bug 1: ContactForm non funzionante dopo navigazione
**File:** `src/components/ContactForm.astro`
**Problema:** Il form usava `DOMContentLoaded` che si attiva solo al primo caricamento. Con le View Transitions di Astro, le navigazioni successive non lo ri-triggerano, rendendo il form morto.
**Fix:** Sostituito `DOMContentLoaded` con `astro:page-load`.

## Bug 2: ThemeToggle rotto su mobile + listener duplicati
**File:** `src/components/ThemeToggle.astro`
**Problema:** Il componente usava `getElementById` ma esisteva in due istanze (desktop + mobile menu), causando ID duplicati. Solo la prima istanza (desktop, nascosta su mobile) veniva trovata. Inoltre i listener si accumulavano ad ogni navigazione senza cleanup.
**Fix:** Riscrittura completa: ID sostituiti con classi (`.theme-toggle`, `.theme-icon-sun`, `.theme-icon-moon`), aggiunto pattern cleanup/init con `astro:before-swap`/`astro:page-load`, gestione multipla via `querySelectorAll`.

## Bug 3: Menu mobile bloccato dopo browser back/forward
**File:** `src/components/Navigation.astro`
**Problema:** Navigando avanti/indietro col browser, il menu poteva restare aperto con `overflow-hidden` sul body, bloccando lo scroll.
**Fix:** Aggiunto reset forzato dello stato DOM del menu all'inizio di `init()`: chiusura overlay, rimozione `overflow-hidden`, reset toggle button e logo.

## Bug 4: Pagina bianca dopo navigazione su mobile
**File:** `src/layouts/Layout.astro`
**Problema:** Le animazioni `.reveal` (opacity 0 → 1) partivano dopo il DOM swap delle View Transitions. Su mobile, il browser renderizzava la pagina con tutti gli elementi a `opacity: 0` prima che il JS li attivasse, causando un flash bianco.
**Fix:** Aggiunto listener `astro:before-swap` che pre-attiva tutti gli elementi `.reveal` nel `e.newDocument` PRIMA dello swap DOM, solo su mobile (`pointer: coarse`). Su desktop il reveal scroll rimane attivo.

## Bug 5: Navigazione lentissima su mobile
**File:** `astro.config.mjs`
**Problema:** Su desktop, il ClientRouter di Astro prefetcha le pagine al hover dei link, rendendo la navigazione istantanea. Su mobile non c'e' hover, quindi ogni tap causava un fetch completo dalla rete (secondi di attesa).
**Fix (step 1):** Aggiunto `prefetch: { prefetchAll: true, defaultStrategy: 'viewport' }`.
**Fix (step 2):** Cambiato strategia da `viewport` a `load`. Con `viewport`, i link nel menu mobile (nascosti in overlay `opacity: 0` o in nav `display: none`) non venivano rilevati dall'IntersectionObserver. Con `load`, TUTTI i link vengono prefetchati immediatamente al caricamento della pagina.
