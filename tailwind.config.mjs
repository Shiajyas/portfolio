// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        14: '3.5rem',
        30: '7.5rem',  // Enables `mt-30`, `md:mt-30`, etc.
      },
      colors: {
        primary: '#030412',
        midnight: '#06091f',
        navy: '#161a31',
        indigo: '#1f1e39',
        storm: '#282b4b',
        aqua: '#33c2cc',
        mint: '#57db96',
        royal: '#5c33cc',
        lavender: '#7a57db',
        fuchsia: '#ca2f8c',  
        orange: '#cc6033',
        sand: '#d6995c',
        coral: '#ea4884',
      },
      animation: {
        orbit: 'orbit 50s linear infinite',
        marquee: 'marquee 50s linear infinite',
        'marquee-vertical': 'marquee-vertical 50s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [],
}
