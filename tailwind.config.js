/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dragon-red': '#8B0000',
        'obsidian': '#1a1a1a',
        'gold': '#FFD700',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
        'parchment': '#F4E8D0',
        'blood': '#8B0000',
        'night': '#0F172A',
        'fire': '#FF6B35',
        'forest': '#228B22',
        'stone': '#708090',
        'royal': '#4B0082',
        'ice': '#E0FFFF',
        'shadow': '#2C3E50',
        'medieval': {
          50: '#FDF6E3',
          100: '#F7EDD0',
          200: '#EAD7A1',
          300: '#D4A574',
          400: '#B8956A',
          500: '#9C7E5C',
          600: '#7D6548',
          700: '#635139',
          800: '#4A3D2B',
          900: '#332817',
        }
      },
      fontFamily: {
        'medieval': ['Georgia', 'serif'],
        'runic': ['Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'sword': 'sword 2s ease-in-out infinite',
        'fire': 'fire 1.5s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700' },
          '100%': { boxShadow: '0 0 20px #FFD700, 0 0 30px #FFD700' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        sword: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        },
        fire: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      backgroundImage: {
        'medieval': 'linear-gradient(135deg, #1a1a1a 0%, #2C3E50 50%, #1a1a1a 100%)',
        'parchment': 'linear-gradient(135deg, #F4E8D0 0%, #EAD7A1 50%, #D4A574 100%)',
        'dragon': 'linear-gradient(135deg, #8B0000 0%, #FF6B35 50%, #8B0000 100%)',
      }
    },
  },
  plugins: [],
}
