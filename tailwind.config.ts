import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: '#232427',
      secondary: '#7183FF',
      white: '#FFFFFF',
      orange: '#E98566',
      black: '#000000',
    },
    screens: {
      // handle extra small screens for iphone 5
      'xs': '320px',
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Turret Road', 'Arial', 'sans-serif'],
        satoshi: ['Satoshi', 'Arial', 'sans-serif']
      },

      maxWidth: {
        '10xl': '90rem',
        '12xl': '120rem',
      },

      minHeight: {
        "fill": "100dvh",
      },

      margin: {
        '130': '32.5rem',
      },

      height: {
        "150": "37.5rem",
        "84": "21rem",
        "100": "25rem",
        "120": "30rem",
        "fill": "100dvh",
        'minus-32': 'calc(100% - 8rem)'
      },

      width: {
        "150": "37.5rem",
        "84": "21rem",
        "100": "25rem",
        "120": "30rem",
      },
    },
  },
  plugins: [],
}
export default config
