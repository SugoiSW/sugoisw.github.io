/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        azul: {
          dark: '#00529D',
          DEFAULT: '#354FA2',
          light: '#354FA2',
        },
        verde: {
          dark: '#009E4E',
          DEFAULT: '#32B44A',
          light: '#50B848',
        },
        morado: {
          dark: '#354FA2',
          DEFAULT: '#5B61AB',
          light: '#A8B7DE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  safelist: [
    {
      pattern: /(bg|text|border)-(azul|verde|morado)/,
    },
  ],
};
