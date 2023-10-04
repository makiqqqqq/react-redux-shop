/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      orange: "#FFB74D",
      green: "#4CAF50",
      purple: "#F2E9FF",
      error: "#F44336",
      primaryText: "#000000",
      secondaryText: "#8D8D8D",
    },
    fontSize: (theme) => ({
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      ...theme("spacing"),
    }),
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    screens: {
      sm: "640px",
      md: "1024",
      lg: "1366px",
      xl: "1920px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
