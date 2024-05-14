export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Typewriter"],
      terminal: ["Terminal"],
    },
    extend: {
      animation: {
        // pulses 5 times 1s equals 5 seconds
        "pulse-short": "pulse 1s ease-in-out 3",
      },
    },
  },
  plugins: [],
};
