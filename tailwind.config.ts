import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        agave: '#efd75e',
        chile: '#dd2d25',
        mole: '#180c08',
        crema: '#fff0b9',
        tortilla: '#f7df72'
      },
      boxShadow: {
        glow: '0 0 80px rgba(239, 215, 94, 0.28)',
        chile: '0 20px 80px rgba(221, 45, 37, 0.28)'
      }
    }
  },
  plugins: []
};

export default config;
