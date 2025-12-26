// tailwind.config.js - Configuration for Tailwind CSS

export default {
  // content: tells Tailwind which files to scan for CSS classes
  // This is how Tailwind knows what styles to include in the final CSS
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  
  // theme: customize colors, fonts, spacing, etc
  theme: {
    extend: {},
  },
  
  // plugins: add extra Tailwind features if needed
  plugins: [],
}
