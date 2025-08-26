import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'localhost',
      '.netlify.app',
      'devserver-feature-supabase-postgis-integration--shorelore.netlify.app'
    ]
  },
  base: './'
})