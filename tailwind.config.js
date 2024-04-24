/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%",
        "1/6": "16.666666%",
        "2/5": "40%",
        "3/5": "60%",
        "3/4": "75%",
        "4/5": "80%",
        96: "29rem", // Example for pl-96
        117: "34rem",
      },
      width: {
        "500px": "500px", // Custom width class
      },
    },
  },
  plugins: [],
};
