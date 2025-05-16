import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './demo',
  publicDir: './public',
  build: {
    outDir: '../demo-dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          icons: ['react-icons']
        }
      }
    }
  },
  resolve: {
    alias: {
      'flexible-calendar-ui': path.resolve(__dirname, './src')
    }
  }
})
