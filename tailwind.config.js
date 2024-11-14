/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4880FF", // 파란색계열
        logoColor: "#FFB617", // 주황색계열
        whiteHover: "#F3F4F6", // 연한회색계열
      },
      screens: {
        xs: "375px",
      },
      spacing: {
        0.5: "0.125rem", // 2px
        1.5: "0.375rem", // 6px
        2.5: "0.625rem", // 10px
        7.5: "1.875rem", // 30px
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.5rem", // 8px
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        scale: {
          from: {
            transform: "scale(0.9)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fade: "fade 0.3s ease-in",
        scale: "scale 0.2s ease-in",
      },
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        // DEFAULT: '1920px',
      },
    },
  },
  plugins: [],
};
