// vite.config.js - Configuration for Vite build tool

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// defineConfig: Vite function that sets up your project
// plugin-react: Tells Vite how to handle React/JSX files
export default defineConfig({
  plugins: [react()],
  
  // Server settings for development
  server: {
    port: 5173,  // Local dev server runs on http://localhost:5173
    open: true   // Automatically opens browser when you run npm run dev
  }
})
