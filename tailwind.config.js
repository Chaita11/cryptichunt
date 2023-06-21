/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lowOpacity: "#ffffff63",
        "span-title": "#D1495B",
        "span-onHover": "#FF5964",
        "span-landing-title": "#95AFBA",
      },
      backgroundColor: {
        "login-button": "	#181923",
        "login-button-hover": "#101011",
      },
      boxShadow: {
        "button-login-shadow":
          "15px 14px 80px 2px hsl(247.85deg 72.33% 25.57% / 5%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
