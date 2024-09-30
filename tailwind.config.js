/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',],
  theme: {
    extend: {
      fontFamily: {
       'workSans': ["Work Sans", 'sans-serif'],
       'qilona': ["Qilona", "sans-serif"],
       'karid': ["Karid", "sans-serif"],
       'montserrat': ["Montserrat", "sans-serif"],
       'poppins': ["Poppins", "sans-serif"]
      },
      transitionDuration: {
        1500: "1500ms",
      },
    },
  },
  plugins: [],
}