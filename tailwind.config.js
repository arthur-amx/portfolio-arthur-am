/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-glow': '#00f6ff',
        'secondary-glow': '#ff00f4',
        'background-dark': '#0b0c10',
        'surface-dark': '#1f2833',
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}