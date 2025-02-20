/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#B78A3D",
          light: "#B78A3D",
        },
        secondary: {
          light: "#f2f2f2",
          dark: "#8b8c8c",
        },
      },
    },
    fontFamily: {
      sans: ["var(--font-outfit)", "sans-serif"],
    },
  },
  plugins: [],
};
