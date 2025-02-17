import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        foreground: "var(--foreground)",
        'regal-blue': '#243c5a',
        'green': '#9EFF00',
        'greenTwo': '#B1FF33',
        'greenThree': '#C5FF66',
        'greenFour': '#D8FF99',

        'gray': '#191919',
        'grayTwo': '#262626',
        'grayThree': '#333333',
        'grayFour': '#4C4C4D',
      },
    },
  },
  plugins: [],
} satisfies Config;