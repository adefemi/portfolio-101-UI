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
    },
    extend: {
      fontFamily: {
        sans: ['Turret Road', 'Arial', 'sans-serif']
      },

      height: {
        "150": "37.5rem",
        "84": "21rem",
        "100": "25rem",
        "120": "30rem",
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
