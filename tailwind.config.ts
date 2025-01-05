import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // Colors:{
    //   "color1" : "#D4BEE4",
    //   "color2" : "#9B7EBD",
    //   "color3" : "#3B1E54",
    // },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#014D0F",
        color2: "#008924",
      },
      spacing: {
        "2px": "2px",
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "50px": "50px",
        "55px": "55px",
        "60px": "60px",
        "70px": "70px",
        "80px": "80px",
        "90px": "90px",
        "480px": "480px",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "30%": "30%",
        "35%": "35%",
        "44%": "44%",
        "20%": "20%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "100%": "100%",
      },

      fontFamily: {
        text1: ["Edu Australia VIC WA NT Hand Precursive"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008924",
          secondary: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
