import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App router-এর জন্য
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // যদি আলাদা components ফোল্ডার থাকে
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;