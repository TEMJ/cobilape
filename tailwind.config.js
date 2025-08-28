/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'slideDown': 'slideDown 0.3s ease-out forwards',
        'slideUp': 'slideUp 0.3s ease-out forwards',
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
        'fadeOut': 'fadeOut 0.2s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { 
            maxHeight: '0',
            opacity: '0',
            overflow: 'hidden'
          },
          '100%': { 
            maxHeight: '100vh',
            opacity: '1',
            overflow: 'visible'
          }
        },
        slideUp: {
          '0%': { 
            maxHeight: '100vh',
            opacity: '1',
            overflow: 'visible'
          },
          '100%': { 
            maxHeight: '0',
            opacity: '0',
            overflow: 'hidden'
          }
        },
        fadeIn: {
          '0%': { 
            maxHeight: '0',
            opacity: '0',
            overflow: 'hidden'
          },
          '100%': { 
            maxHeight: '24rem',
            opacity: '1',
            overflow: 'visible'
          }
        },
        fadeOut: {
          '0%': { 
            maxHeight: '24rem',
            opacity: '1',
            overflow: 'visible'
          },
          '100%': { 
            maxHeight: '0',
            opacity: '0',
            overflow: 'hidden'
          }
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 