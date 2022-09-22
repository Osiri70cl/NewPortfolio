// ./tailwind.config.js

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        128: "37.5rem",
        138: "43.75rem",
        26: "6.5rem",
      },
      colors: {
        newGray: "#d1d1d1",
        red: "#ff0000",
        white: "#ffffff",
        darkBlue: "#2c3e50",
        green: "#42b983",
      },
      width: {
        128: "45%",
        26: "6.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
