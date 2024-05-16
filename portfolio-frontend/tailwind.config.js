const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
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
        "3d": "0px 6px 0px 0px rgba(90,90,90,1), -10px -10px 15px rgba(30,30,30,.5)",
        "3d-small":
          "0px 8px 0px 0px rgba(80,80,80,1), -5px -5px 13px rgba(30,30,30,.5)",
        "3d-about":
          "0px 7px 0px rgba(90,90,90,1), 0px 8px 0px 0px rgba(0,0,0,1), -4px -4px 13px rgba(30,30,30,.5) ",
      },
    },
  },
  plugins: [[flowbite.plugin()]],
};
