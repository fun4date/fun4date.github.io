/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'main-font': ['"Archivo"'],
      },
      colors: {
        primary: {
          DEFAULT: "#5441FF",
          blue: '#1C74D9',
          green: '#98CE00',
          "green-400": '#D7F38A',
        },

        secondary: "#393D49",
        link_header: "#9ECBFF",

        backgroundPrimary: "#272932",
        backgroundSecondary: "#393D49",
        linkHeader: "#9ECBFF",
        accent: "#5340FF",
        black: "#1F2023",
        white: "#FAFBFF",
        burgundy: "#9F226D",
        cyan: "#21E2ED",
        lilac: "#AE9FF2",
        // f4d brand colors
        bluePrimary:'#1C74D9',
        greenPrimary:'#98CE00',

        //borrar ca_blue, ca_orange cuando ya no estén usándose en ningún componente
        //borrar
        ffdGreen:{
          400:'#D7F38A',
          300: '#F1FFCA',
        },
        ffdBlue:{
          500:'#3D8EEA',
          400: '#9ECBFF',
          300: '#C9E2FF',
          200: '#E8F2FF',
          100: '#F9FCFF'
        },
        ca_blue: {
          900: "#3302BF",
          800: "#4507C9",
          700: "#4F1BE4",
          600: "#5441FF",
          500: "#6E76FF",
          400: "#97A7FF",
          300: "#BECAFF",
          200: "#DBE2FF",
          100: "#EBF0FF",
          50: "#F5F8FF",
        },
        ca_orange: {
          300: "FF9900",
          200: "FFBD1B",
          100: "FFE685",
        },
        //borrar

        gray: {
          600:'#393D49',
          500:'#606578',
          400:'#B4B7C2',
          300:'#DEE0EA',
          200:'#F1F3FA',
          100:'#F8F8F8',
  
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
