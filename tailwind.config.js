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
      backgroundImage: {
        "background-vector": 'url("/background.svg")',
      },
      colors: {
        "gradient-yellow": 'from-[#FF705B] to-[#FFB457]"',
      },
      fontSize: {
        "6xl": "4.5rem",
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
            subtitle: {
              DEFAULT: "#71717a",
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
            subtitle: {
              DEFAULT: "#71717a",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
