import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "hero-pattern": 'url("/background.svg")',
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "system",
      layout: {
        radius: {
          small: "2px",
          medium: "4px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "4px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#e26c00",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#0fa968",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#bb4802",
              foreground: "#ffffff",
            },
            success: {
              DEFAULT: "#0fa968",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
