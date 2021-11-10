module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#829399',
          'dark': '#131515'
        }
      },
      boxShadow: {
        sm: '0px 0px 50px 0.5px rgb(0 0 0 / 10%)',
      },
      maxHeight: {
        'card-grid': '300px'
      },
    },
    container: {
      padding: {
        DEFAULT: '10rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
