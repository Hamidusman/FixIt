/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#E68C1A',
        primary_dark: '#A5640D',
        x: 'white',
        secondary: '#a5630d27;',
        accent: '#008080',
        accent_low: '#00808030',
        gray: '#f8f7fd',
        w: '#fff',
        dark: '#212141',
        smoke: '#f5f5f5'

      },
      boxShadow: {
        'custom-rounded': '0 8px 12px rgba(0, 0, 0, 0.1)',
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow
        'custom-medium': '5px 8px 12px rgba(0, 0, 0, 0.2)', // Medium shadow
        'custom-dark': '0 12px 24px rgba(0, 0, 0, 0.4)', // Dark shadow
        'custom-xl': '0 20px 40px rgba(0, 0, 0, 0.5)', // Extra-large shadow
        'custom-inset': 'inset 0 4px 6px rgba(0, 0, 0, 0.3)', // Inset shadow
      },
    },
  },
  plugins: [],
}

