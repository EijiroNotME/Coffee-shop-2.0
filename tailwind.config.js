/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grad-diagonal":
          "linear-gradient(to right bottom, rgba(13, 12, 10, 1), rgb(22, 14, 11, 1), rgb(44, 21, 13, 1))",
      },
      colors: {
        //Main Color Palette ====================================
        primary: {
          default: "#FFFFFF",
          hover: "#F5F5F5",
        },
        secondary: {
          default: "#0D0C0A",
          hover: "#22211F",
        },
        accent: {
          default: "#FD8D29",
          hover: "#F39942",
        },

        //Default Color Palette ===================================
        error: {
          default: "#f44336",
          hover: "#d32f2f",
        },
        warning: {
          default: "#ff9800",
          hover: "#ffa726",
        },
        success: {
          default: "#4caf50",
          hover: "#388e3c",
        },
        info: {
          default: "#2196f3",
          hover: "#1976d2",
        },
        //Shadow shades ===========================================
        shade: {
          default: "rgba(0, 0, 0, 0.25)",
          hover: "rgba(0, 0, 0, 0.5)",
        },
        //text colors ==============================================
        color: {
          default: "#000000",
          hover: "#FFFFFF",
          heading: "#FFFFFF",
        },

        //background colors ========================================
        background: {
          default: "#FFFFFF",
          hover: "#F5F5F5",
          contrast: "#160E0B",
        },
      },
    },
  },
  plugins: [],
};
