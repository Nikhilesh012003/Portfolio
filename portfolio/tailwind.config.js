/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#050509',
        surface: '#0c0c14',
        card: '#10101c',
        border: '#1a1a2e',
        accent: '#00ff88',
        blue: '#00c8ff',
        red: '#ff4d6d',
        muted: '#4a4a6a',
        faint: '#1e1e36',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88' },
          to: { textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff8866' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
