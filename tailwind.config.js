/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#4B67FA",

        // Validation
        disabled: "#DEE2E6", // gray-400
        valid: "#10B981", // green-500 // this one is not used currently
        invalid: "#EF4444", // red-500
        // Backgrounds
        window: "#FFFFFF", // white // used for individual windows
        background: "#F8F9FA", // gray-100 // used for outer most background
        // Texts
        default: "#343A40", // gray-900 // default almost black text
        fade: "#868E96", // gray-700
        highlight: "#CFD4DA", // gray-500
        input: "#000000", // black // used as default in text input boxes

        // Custom Palettes
        gray: {
          100: "#F8F9FA",
          200: "#F1F3F5",
          300: "#E8EBED",
          400: "#DEE2E6",
          500: "#CFD4DA",
          600: "#ADB5BD",
          700: "#868E96",
          800: "#495057",
          900: "#343A40",
        },
      },
    },
  },
  plugins: [],
};
