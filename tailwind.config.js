module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        "custom-color-red": "#B20600",
        "custom-color-orange": "#FF5F00",
        "custom-color-grey": "#EEEEEE",
      },
      container: {
        center: true,
        padding: "1rem",
          screens: {
            lg: "1124px",
            xl: "1124px",
            "2xl": "1124px",
        },
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
}
