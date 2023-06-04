/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scence/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sofia: "'Sofia Sans Semi Condensed', sans-serif",
      poppin: "'Poppins', san serif",
      share: "'Share Tech Mono', monospace",
      mono: "'Segoe UI', Tahoma, sans-serif",
    },
    extend: {
      borderWidth: {
        bold: "40px",
        top: "60px",
      },
      spacing: {
        "5rem": "5rem",
      },
      colors: {
        navy: "rgba(2, 12, 27, 1)",
      },
      height: {
        "50%": "75%",
        18: "4.5rem",
        "80%": "80%",
      },
      width: {
        100: "35rem",
        42: "10.8rem",
        "10rem": "10rem",
        45.5: "11.3rem",
        37: "9.5rem",
        "95%": "95%",
        "10.5rem": "10.8rem",
        46: "11.7rem",
      },
      spacing: {
        "center-drop": "37%",
        41: "41%",
        "xs-s": "2px",
        3.5: "3.2rem",
        18: "4.5rem",
        10.5: "2.59rem",
      },
      padding: {
        "xs-s": "2px",
      },
      zIndex: {
        "z-70": "70",
      },
      fontSize: {
        base2: "1rem",
      },
      lineHeight: {
        base2H: "1rem",
      },
      borderRadius: {
        base: "4px",
      },
    },
  },
  plugins: [],
};
