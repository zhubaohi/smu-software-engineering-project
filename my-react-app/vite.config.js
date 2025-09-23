import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the base to the repository name for GitHub Pages deployment under /<repo>/
// If your repo name changes or you use a custom domain, adjust this value.
export default defineConfig({
  plugins: [react()],
  base: '/smu-software-engineering-project/'
})
