const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1eaa7d',
        secondary: '#293d66',
        background: '#f5f8fa',
      },
    },
  },
  daisyui: {
    themes: [
      {
        'smart-energy': {
          primary: '#1eaa7d',
          secondary: '#293d66',
          accent: '#49d2a7',
          neutral: '#293d66',
          'base-100': '#ffffff',
        },
      },
      'dim',
    ],
    darkTheme: 'light',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: false,
  },

  plugins: [require('daisyui')],
};
