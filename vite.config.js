import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  server: {
    host: true, // Allows access from external networks
    allowedHosts: ["f31d-102-90-100-236.ngrok-free.app"], // Allow requests from this host
  },

})
