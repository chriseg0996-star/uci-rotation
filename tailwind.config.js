/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070E1B', // app background
          900: '#0A1628', // base surface
          850: '#0E1D33', // sidebar
          800: '#13243D', // elevated card
          700: '#1B3050', // hover / border-strong
          600: '#26436E',
        },
        ink: {
          100: '#F4F7FB', // primary text
          200: '#C7D2E0', // secondary text
          300: '#9AA9BE', // muted gray
          400: '#6B7A90', // faint
        },
        icu: {
          DEFAULT: '#2D7FF9', // ICU blue accent
          400: '#4A9EFF',
          500: '#2D7FF9',
          600: '#1E63D4',
          soft: 'rgba(45,127,249,0.12)',
        },
        vital: {
          green: '#3FBF8F',
          amber: '#E0A83E',
          red: '#E0573E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
