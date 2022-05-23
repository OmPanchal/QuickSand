let scheme = {
  white: "var(--white)",
  black: "#000000",
  primary: "#d12a32",
  secondary: "#de5259",
  transparent: "transparent",
  red: "#e68a8e",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "var(--white)",
      black: "var(--black)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      transparent: "var(--transparent)",
      red: "var(--red)",
    },
    extend: {
      fontFamily: {
        QSM: "QS-M",
        QSB: "QS-B",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        spin180: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        spin180: "spin180 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

// & Ocean
// white: "#ffffff",
// black: "#000000",
//       primary: "#011a2e",
//       secondary: "#05334d",
//       transparent: "transparent",
//       red: "#ed1b26df",

// & Strawberry Jam
// white: "#ffffff",
// black: "#000000",
// primary: "#d12a32",
// secondary: "#de5259",
// transparent: "transparent",
// red: "#e68a8e",

// & Dull Honey
// white: "#ffffff",
//       black: "#000000",
//       primary: "#9c6717",
//       secondary: "#e3b022",
//       transparent: "transparent",
//       red: "#e68a8e",
