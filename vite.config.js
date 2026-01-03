import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Update this base path to match your GitHub repository name
  // For example, if your repo is 'my-app', set base to '/my-app/'
  // For root domain deployment, set base to '/'
  base: process.env.NODE_ENV === 'production' ? '/Bizzlead-Web/' : '/',
})
