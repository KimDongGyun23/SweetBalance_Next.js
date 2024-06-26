import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {},
    extend: {
      minHeight: {
        content: 'calc(100svh - 2.5rem - 112px - 1.25rem )',
      },
      colors: {
        gray: {
          '100': '#696565',
          '200': '#424242',
        },
        blue: {
          '100': '#D1E5F9',
          '200': '#83C7F8',
          '300': '#85Bff4',
          '400': '#2987F5',
          //...
        },
        error: '#FF2020',
      },
      backgroundColor: {
        primary: '#90C0EF',
      },
    },
  },
  plugins: [],
};
export default config;
