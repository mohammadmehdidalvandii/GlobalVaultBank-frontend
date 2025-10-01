import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve:{
    alias:{
      '@page':'/src/page/',
      '@components':'/src/components/',
      '@components/modules':'/src/components/modules/',
      '@components/template':'/src/components/template/',
      '@hooks':'/src/hooks/',
      '@layouts':'/src/layouts/',
      '@services':'/src/services/',
      '@utils':'/src/utils/',
      '@store':'/src/store/',
      '@validation':'/src/validation/',
    }
  },
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-select', '@radix-ui/react-dialog', 'lucide-react'],
          'zod-vendor': ['zod'],
          'i18n-vendor': ['i18next', 'react-i18next']
        }
      }
    }
  }
})



