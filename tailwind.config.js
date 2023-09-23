/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-text-gradient":
          "linear-gradient(to bottom, rgba(235,247,245,1) 0%, rgba(235,247,245,1) 8%, rgba(235,247,245,0) 30%, rgba(235,247,245,0) 50%, rgba(235,247,245,0) 70%, rgba(235,247,245,1) 92%, rgba(235,247,245,1) 100%)",
        "slider-hover":
          "linear-gradient(235deg, #43B9A4 -10.75%, #32707E 103.94%)",
      },
      boxShadow: {
        "selected-slider": "0px 16px 40px -4px rgba(43, 85, 87, 0.30)",
        10: "0px 10px 24px -8px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: {
          50: "#F2F9F8",
          100: "#EBF7F5",
          200: "#D1EBE7",
          300: "#ABDDD7",
          400: "#82CFC7",
          500: "#5FB5AC",
          600: "#47968E",
          700: "#377875",
          800: "#2F5C5A",
          900: "#1E4242",
          950: "#112B2A",
        },
        secondary: {
          50: "#EDF6FA",
          100: "#C9E5F0",
          200: "#A4D3E6",
          300: "#80C2DB",
          400: "#5CB0D1",
          500: "#389FC7",
          600: "#2E82A3",
          700: "#24657F",
          800: "#19485A",
          900: "#0F2B36",
          950: "#050E12",
        },
        neutral: {
          50: "#F3F5F7",
          100: "#DEE5E8",
          200: "#C6D2D7",
          300: "#A8BAC2",
          400: "#89A3AE",
          500: "#6B8C9A",
          600: "#557381",
          700: "#3F5965",
          800: "#2F434D",
          900: "#22343D",
          950: "#0D1F2A",
        },
      },
      fontFamily: {
        display: ['"Work Sans"', "Roboto", "ui-sans-serif", "system-ui"],
        body: ['"Miriam Libre"', '"Work Sans"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
