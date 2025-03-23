import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external networks
    allowedHosts: ["6bbb-102-90-102-6.ngrok-free.app"], // Allow requests from this host
  },

})
