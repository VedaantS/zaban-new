module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './utils/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        s: '0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03)',
        m: '0px 4px 7px -2px rgba(16, 24, 40, 0.03), 0px 12px 24px -4px rgba(16, 24, 40, 0.03)',
        l: '0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.1)',
        xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.1)',
        xxl: ' 0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
        xxxl: '0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
        around: '5px 5px 12px rgba(16, 24, 40, 0.25)',
        czech: '0px 0px 32px 6px #f4768d;',
        ukraine: '0px 0px 32px 6px #ffd500',
      },
      colors: {
        'primary-blue': '#203354',
        'primary-yellow': '#F5BB00',
        'primary-red': '#D76A03',
        'primary-grey': '#ebedf5',
        'primary-black': '#2D2D2D',
        'primary-green': '#48ab64',
        'kiosk-yellow': '#EC9F05',
        'kiosk-red': '#FFE1DE',
        'primary-light-blue': '#bbe6f0',
      },
      borderWidth: {
        1: '1px',
      },
      backgroundImage: {
        'homepage-hero': "url('/icons/movapp-bg.svg')",
      },
      font: {
        ['sans-pro']: 'Source Sans Pro',
      },
      scale: {
        110: '1.1',
      },
    },
  },
  plugins: [],
};
