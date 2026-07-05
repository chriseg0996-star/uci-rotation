/** @type {import('tailwindcss').Config} */
// SONOCRÍTICO Slate — sistema de diseño para educación médica en cuidados críticos.
// Dark-only. Acento acero (steel) para navegación/información, ámbar (pearl) para perlas
// clínicas de alto rendimiento, terracota (terra) para advertencias/patología, menta (mint)
// para completado/éxito. Legacy (navy/icu/vital) se mantiene como alias hacia la nueva paleta.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // — Superficies (fondo → elevado)
        slate: {
          950: '#0A0C10', // vacío más profundo
          900: '#0F1115', // fondo de la app (canónico)
          850: '#141720', // sidebar / hundido
          800: '#1B2130', // tarjeta elevada (canónico)
          750: '#222A3B', // hover elevado
          700: '#2B3346', // borde fuerte
          600: '#3B4559', // borde/realce
        },
        // — Texto (neutro cálido, alta legibilidad sobre oscuro)
        ink: {
          100: '#E9EDF4', // primario
          200: '#B9C2D0', // secundario
          300: '#8B95A6', // atenuado
          400: '#5A6474', // tenue / captions
        },
        // — Acento acero (navegación, enlaces, foco, información)
        steel: {
          DEFAULT: '#8FA7C4',
          300: '#B4C5DA',
          400: '#8FA7C4',
          500: '#748EAE',
          600: '#5C748F',
          soft: 'rgba(143,167,196,0.10)',
        },
        // — Perla clínica (ámbar/oro, alto rendimiento)
        pearl: {
          DEFAULT: '#D8A24C',
          300: '#E7C77E',
          400: '#D8A24C',
          500: '#BE8A38',
          soft: 'rgba(216,162,76,0.10)',
        },
        // — Advertencia / patología (terracota)
        terra: {
          DEFAULT: '#C97B6B',
          300: '#DDA192',
          400: '#C97B6B',
          500: '#B0624F',
          soft: 'rgba(201,123,107,0.10)',
        },
        // — Completado / éxito (menta)
        mint: {
          DEFAULT: '#5FB89A',
          300: '#8FD3BC',
          400: '#5FB89A',
          500: '#48A085',
          soft: 'rgba(95,184,154,0.10)',
        },

        // — Alias legacy → nueva paleta (red de seguridad)
        navy: {
          950: '#0A0C10',
          900: '#0F1115',
          850: '#141720',
          800: '#1B2130',
          700: '#2B3346',
          600: '#3B4559',
        },
        icu: {
          DEFAULT: '#8FA7C4',
          400: '#B4C5DA',
          500: '#8FA7C4',
          600: '#748EAE',
          soft: 'rgba(143,167,196,0.10)',
        },
        vital: {
          green: '#5FB89A',
          amber: '#D8A24C',
          red: '#C97B6B',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 1px 2px 0 rgba(0,0,0,0.35)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 16px 40px -18px rgba(0,0,0,0.75)',
        pop: '0 10px 34px -10px rgba(0,0,0,0.65)',
        glow: '0 0 0 1px rgba(143,167,196,0.20), 0 10px 30px -10px rgba(143,167,196,0.28)',
        'inset-line': '0 1px 0 0 rgba(255,255,255,0.04) inset',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.4s ease both',
        'scale-in': 'scale-in 0.35s cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
}
