import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    watch: {
      usePolling: true,
    },

    port: 4000,
    strictPort: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    outDir: 'dist',
    manifest: true,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    minify: 'terser',

    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: chunkInfo => {
          if (!chunkInfo.name) {
            return 'assets/[name]-[hash][extname]'
          }
          const extType = chunkInfo.name.split('.').pop()?.toLowerCase() || ''
          if (/(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]'
          } else if (/(woff2?|eot|ttf|otf)$/i.test(extType)) {
            return 'assets/fonts/[name]-[hash][extname]'
          } else if (extType === 'css') {
            return 'assets/styles/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
