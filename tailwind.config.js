/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        cream: '#fdf6ee',
        warmwhite: '#fff9f2',
        terracotta: { DEFAULT: '#c0694a', light: '#d4856a' },
        brown: { DEFAULT: '#6b3f2a', light: '#8c5a3f', dark: '#3d1f0f' },
        gold: { DEFAULT: '#c9a84c', light: '#e0c575' },
        border: '#e8d5c0',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'slide-in': 'slideIn 0.35s cubic-bezier(.4,0,.2,1) forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideIn: { from: { right: '-420px' }, to: { right: '0' } },
      }
    },
  },
  plugins: [],
}
