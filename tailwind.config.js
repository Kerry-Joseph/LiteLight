/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway' : ['Raleway', 'sans-sarif'],
        'lora': ['Lora', 'serif']
      }
    },
    clipPath: {
      auth_modal: "polygon(50% 0%, 60% 20%, 100% 20%, 100% 100%, 0 100%, 0 20%, 40% 20%)",
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-clip-path'),
  ],
}
