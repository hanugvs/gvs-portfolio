/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface-solid)',
        cyan: {
          DEFAULT: 'var(--accent-cyan)',
          soft: 'rgba(34, 211, 238, 0.14)',
        },
        blue: {
          accent: 'var(--accent-blue)',
        },
        violet: {
          accent: 'var(--accent-violet)',
        },
        ink: 'var(--text)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.15)',
        panel: '0 20px 50px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
