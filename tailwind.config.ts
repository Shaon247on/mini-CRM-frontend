import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        "btn-pulse": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fadeInUp": {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        "btn-hover": "btn-pulse 0.4s ease-in-out",
        "fadeInUp": 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;