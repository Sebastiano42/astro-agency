/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Palette "Deep Luxury" Tuned for Contrast
                background: '#020202', // Quasi nero assoluto per lo sfondo principale
                surface: '#0F0F0F',    // Un grigio molto scuro ma distintamente diverso dal nero per le card
                surfaceHighlight: '#1A1A1A', // Per input e elementi attivi
                border: '#2A2A2A',     // Bordi più chiari per definire meglio gli spazi

                primary: {
                    DEFAULT: '#FFFFFF', // Bianco puro
                    muted: '#A3A3A3',
                },
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace'],
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(to bottom, #020202, #000000)',
                'grid-pattern': 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 30s linear infinite',
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
