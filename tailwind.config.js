// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-in-delayed": "fadeIn 0.6s ease-out 200ms both",
        "fade-in-stagger": "fadeInStagger 0.6s ease-out forwards",
        "zoom-fade": "zoomFade 5s ease-in-out forwards",
        "kenburns": "kenburns 6s ease-in-out forwards",
        "progress-bar": "progressBar 5s linear forwards",
        "fade-stagger": "fadeStagger 0.3s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInStagger: {
          "0%": { opacity: 0, transform: "translateY(32px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomFade: {
          "0%": { transform: "scale(1.05)", opacity: 0 },
          "20%": { opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        kenburns: {
          "0%": { transform: "scale(1.07)", opacity: 0 },
          "20%": { opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeStagger: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};