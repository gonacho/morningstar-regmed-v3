/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F4A',
          light: '#3D7A61',
          dark: '#1E4233',
        },
        accent: {
          DEFAULT: '#E8A87C',
          dark: '#D4915E',
        },
        bg: {
          warm: '#F8F6F2',
          cream: '#F0EDE7',
        },
        dark: {
          DEFAULT: '#1A2B22',
          muted: '#243D2E',
        },
        body: '#5C5C52',
        muted: '#8C8C80',
        border: '#E2DDD6',
      },
      fontFamily: {
        heading: ['Jost', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
