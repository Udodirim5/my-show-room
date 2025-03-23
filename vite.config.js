import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  server: {
    host: true, // Allows access from external networks
    allowedHosts: ["6bbb-102-90-102-6.ngrok-free.app"], // Allow requests from this host
  },

})
