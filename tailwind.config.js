/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerImg: "url('/empty@2x.png')",
        headerPlayersImg: "url('/rectangle-2@2x.png')",
        headerSessionsImg: "url('/training-image-placeholder@2x.png')",
      },
      colors: {
        gray: {
          100: "#1a2242",
          200: "#171633",
          300: "rgba(255, 255, 255, 0.6)",
          400: "rgba(0, 0, 0, 0.25)",
          500: "rgba(255, 255, 255, 0.25)",
          600: "rgba(255, 255, 255, 0.1)",
        },
        blanc: "#fff",
        flw: "#a7a7a7",
        brown: "#910a2d",
        indianred: {
          100: "#b83054",
          200: "rgba(184, 48, 84, 0.09)",
        },
        darkslategray: "#283349",
        silver: "#b8b8b8",
        snow: "#fff7f7",
        black: "#000",
        gainsboro: "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        cairo: "Cairo",
        "ibm-plex-sans-arabic": "'IBM Plex Sans Arabic'",
        knewave: "Knewave",
        abel: "Abel",
        almarai: "Almarai",
      },
      borderRadius: {
        "2xl-8": "21.8px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      xs: "12px",
      xl: "20px",
      sm: "14px",
      smi: "13px",
      "21xl": "40px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      sm: {
        min: "825px",
      },
      md: {
        max: "600px",
      },
      lg: {
        max: "900px",
      },
      xl: {
        max: "825px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
