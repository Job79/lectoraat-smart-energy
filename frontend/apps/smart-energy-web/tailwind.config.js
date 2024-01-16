const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        'smart-energy': {
          primary: '#1eaa7d',
          secondary: '#293d66',
          accent: '#49d2a7',
          neutral: '#293d66',
          'base-100': '#ffffff',
          'base-200': '#f5f8fa',
          '.fill-icon': {
            fill: '#293d66',
          },
        },
      },
      {
        dim: {
          ...require('daisyui/src/theming/themes')['dim'],
          '.fill-icon': {
            fill: '#ffffff',
          },
        },
      },
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
