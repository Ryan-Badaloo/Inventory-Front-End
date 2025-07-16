/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue}"
    ],
    theme: {
      extend: {},
    },
    safelist: [
    'focus:bg-blue-100',
    'group-hover:text-blue-500',
    'peer-focus:text-blue-500',
    ],
    plugins: [],
  }