/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px',
      },
      fontFamily: {
        'sans': ['var(--ff-primary)', ... defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          red: 'hsl(var(--notice) / <alpha-value>)',
          blue: 'hsl(var(--blue-accent) / <alpha-value>)'
        },
        light: {
          DEFAULT: 'hsl(var(--light) / <alpha-value>)',
          400: 'hsl(var(--light-400) / <alpha-value>)',
          500: 'hsl(var(--light-500) / <alpha-value>)'
        },
        dark: {
          DEFAULT: 'hsl(var(--dark) / <alpha-value>)',
          500: 'hsl(var(--dark-500) / <alpha-value>)',
          800: 'hsl(var(--dark-800) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'a': {
          fontWeight: theme('fontWeight.bold'),
          textColor: theme('color.inherit'),
          // transitionProperty: theme('transitionProperty.all'),
          // transitionDuration: theme('transitionDuration.200'),
          // transitionTimingFunction: theme('transitionTimingFunction[ease-in-out]'),
          // '&:hover': {
          //   textColor: theme('color.primary.blue'),
          // },
          // '&:focus': {
          //   textColor: theme('color.primary.blue'),
          // }
        }
      })
    })
  ],
}
