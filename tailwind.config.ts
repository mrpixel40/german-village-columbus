import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brick: {
          50: '#fdf6f0',
          100: '#f9e8d8',
          200: '#f2ceaf',
          300: '#e9ad7e',
          400: '#de854c',
          500: '#d4692e',
          600: '#c55423',
          700: '#a3401f',
          800: '#843520',
          900: '#6b2d1d',
          950: '#3a150d',
        },
        village: {
          50: '#f4f7f1',
          100: '#e5ebde',
          200: '#ccd8bf',
          300: '#a9bd97',
          400: '#86a06f',
          500: '#688452',
          600: '#506940',
          700: '#3f5234',
          800: '#34432c',
          900: '#2c3926',
          950: '#151e12',
        },
        slate: {
          850: '#1a2332',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
