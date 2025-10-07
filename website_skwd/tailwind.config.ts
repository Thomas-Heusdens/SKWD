import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'skwd-light-blue': '#1414A8',
        'skwd-blue': '#07073D',
        'skwd-dark-blue': '#030326',
        'skwd-white': '#E6E6EB',
        'skwd-text-highlight': '#FE5F55',
        'skwd-button': '#D64550',
      },
    },
  },
  plugins: [],
};

export default config;