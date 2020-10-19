module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enable: process.env.NODE_ENV === 'production',
    content: ['src/**/*.tsx', 'public/index.html']
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d4d5d6",
          200: "#a9abae",
          300: "#7e8085",
          400: "#53565d",
          500: "#282c34",
          600: "#20232a",
          700: "#181a1f",
          800: "#101215",
          900: "#08090a"
        },
        secondary: {
          100: "#dff8fe",
          200: "#c0f0fd",
          300: "#a0e9fd",
          400: "#81e1fc",
          500: "#61dafb",
          600: "#4eaec9",
          700: "#3a8397",
          800: "#275764",
          900: "#132c32"
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  variants: {},
  plugins: []
}