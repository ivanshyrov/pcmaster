/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-fab': {
          '0%, 100%': { boxShadow: '0 8px 28px rgba(251,146,60,0.45)' },
          '50%': { boxShadow: '0 8px 40px rgba(251,146,60,0.7)' },
        },
      },
      animation: {
        'pulse-fab': 'pulse-fab 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
