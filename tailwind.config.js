/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1150px'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primarycolor': '#4CAF4F',
        'navitemscolor': '#18191F',
        'headingcolor': '#4D4D4D',
        'paragraphcolor': '#717171',
      },
      fontSize: {
        'headingsize': '36px',
        'titlesize': '16px',
        'paragraphsize': '14px',
      }
    },
  },
  plugins: [],
}