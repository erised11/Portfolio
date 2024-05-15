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
      boxShadow: {
        "3d": "0px 6px 0px 0px rgba(90,100,80,1), -10px -10px 15px rgba(30,30,30,.5)",
      },
    },
  },
  plugins: [],
};
