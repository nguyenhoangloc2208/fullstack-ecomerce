/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out-left': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(15px)',
          },
        },
        'fade-in-bottom': {
          '0%': {
            opacity: '0',
            transform: 'translateY(15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-top': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(5px)',
          },
        },
      },
      animation: {
        'fade-in-right': 'fade-in-right 0.5s ease-in-out forwards',
        'fade-out-left': 'fade-out-left 0.5s ease-in-out forwards',
        'fade-in-bottom': 'fade-in-bottom 0.5s ease-in-out forwards',
        'fade-out-top': 'fade-out-top 0.1s forwards',
      },
      boxShadow: {
        custom: 'rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(0, 184, 83, 0.2) 0%, rgba(32, 55, 88, 0) 100%)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        third: 'var(--color-bg-third)',
        button: 'var(--color-bg-button)',
        header: 'var(--color-header)',
        input: 'var(--color-bg-input)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-bg-secondary)',
        accent: 'var(--color-text-accent)',
      },
    },
  },
  plugins: [],
};
