module.exports = {
  purge: ["./src/**/*.html",'./src/js/**/*.{js,ts,jsx,tsx}','./src/blog/**/*.html',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  animation: {
		fade: 'fadeOut 0.5s ease-in-out',
	  },
      fontFamily: {
        raleway: ["Raleway"],
      },
	  keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        89: "22.25rem",
        100: "25rem",
        130: "32.5rem",
      },
      width: {
        mc: "max-content",
      },
      borderRadius: {
        "5xl": "2.5rem",
        "10xl": "5rem",
        "20xl": "10rem",
      },
      scale: {
        200: "2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
