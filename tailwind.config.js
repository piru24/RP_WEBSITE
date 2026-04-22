/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050505',
          panel: 'rgba(8, 12, 14, 0.72)',
          green: '#00ff9f',
          cyan: '#00e5ff',
          purple: '#6d28d9',
          muted: '#8aa39a',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 255, 159, 0.22)',
        cyan: '0 0 30px rgba(0, 229, 255, 0.18)',
        purple: '0 0 34px rgba(109, 40, 217, 0.24)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(0,255,159,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,159,.08) 1px, transparent 1px)',
        scanline:
          'linear-gradient(to bottom, transparent 0%, rgba(0,255,159,.08) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
};
