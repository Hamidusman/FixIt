/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
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
  			smoke: '#f5f5f5',
  			faded: '#71717a'
  		},
  		boxShadow: {
  			'custom-rounded': '0 8px 12px rgba(0, 0, 0, 0.1)',
  			'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
  			'custom-medium': '5px 8px 12px rgba(0, 0, 0, 0.2)',
  			'custom-dark': '0 12px 24px rgba(0, 0, 0, 0.4)',
  			'custom-xl': '0 20px 40px rgba(0, 0, 0, 0.5)',
  			'custom-inset': 'inset 0 4px 6px rgba(0, 0, 0, 0.3)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require('tailwind-scrollbar'),
      require("tailwindcss-animate")
],
}

