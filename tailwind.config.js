/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0d0f52",
        "lendo-primary": "#2d91fe",
        "lendo-secondary": "#ff6769",
        gray: {
          DEFAULT: "#E5E5F3",
          700: "#8687a8",
        },
        green: {
          DEFAULT: "#80CB17",
        },
      },
    },
  },
  plugins: [],
};
