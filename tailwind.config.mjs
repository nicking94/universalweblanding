/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".875rem",
        xs: "1rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "4rem",
        xxl: "5rem",
        xxxl: "18.676rem",
        
      },
      colors: {
        textGray: "#A19E9E",
        backgroundGray: "#DDDCEC",
        gray: "#FBFBFB",
        grayMedium: "#545454",
        grayDark: "#595959",
        black: "#0F050E",
        violet: "#AE39A3",
      },
    },
  },
  plugins: [],
};
