import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          burgundy: '#6A0B23',
          'burgundy-dark': '#560B18',
          'burgundy-deep': '#3B010B',
          beige: '#F5EFE8',
          'dusty-pink': '#D7B2B7',
          espresso: '#221516',
          'warm-white': '#FAF8F6',
          latte: '#BFA18A',
          'sand-gold': '#F2D9A0',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      fontSize: {
        hero: ['clamp(3rem, 5vw + 1rem, 5rem)', { lineHeight: '1.05' }],
        display: ['clamp(2rem, 3.5vw + 1rem, 3.5rem)', { lineHeight: '1.1' }],
        heading: ['clamp(1.5rem, 2vw + 1rem, 2.25rem)', { lineHeight: '1.2' }],
        subheading: ['clamp(1.25rem, 1.5vw + 1rem, 1.5rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(34, 21, 22, 0.06)',
        'card': '0 8px 32px rgba(34, 21, 22, 0.10)',
        'float': '0 16px 48px rgba(34, 21, 22, 0.12)',
        'btn': '0 8px 20px rgba(106, 11, 35, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;
