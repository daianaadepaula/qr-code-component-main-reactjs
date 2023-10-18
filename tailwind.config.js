/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		colors: {
      'cardColor': 'hsl(0, 0%, 100%)',
      'bgColor': 'hsl(212, 45%, 89%)',
      'paragraphColor': 'hsl(220, 15%, 55%)',
      'titleColor': 'hsl(218, 44%, 22%)',
    },
    extend: {},
  },
  plugins: [],
}

