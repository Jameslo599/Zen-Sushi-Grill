module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.html",'./src/js/**/*.{js,ts,jsx,tsx}','./src/blog/**/*.html',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  animation: {
		fadeIn: 'fadeIn 1s ease'
	  },
      fontFamily: {
        raleway: ["Raleway"],
      },
	  keyframes: {
		  fadeIn: {
		  '0%': { opacity: 0},
		  '100%': { opacity: 1},
		  },
	  },
      spacing: {
		 3: "0.75rem",
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
