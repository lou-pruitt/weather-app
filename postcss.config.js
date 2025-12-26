// postcss.config.js - Configuration for PostCSS

// PostCSS is a tool that processes CSS
// We're using it here to add Tailwind CSS processing
export default {
  plugins: {
    tailwindcss: {},      // Process Tailwind CSS
    autoprefixer: {},     // Add browser compatibility prefixes automatically
  },
}
