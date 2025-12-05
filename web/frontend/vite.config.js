import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import FullReload from 'vite-plugin-full-reload'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // mỗi khi src thay đổi thì reload browser
    FullReload(['src/**']),
  ],
  server: {
    port: 5173,
    // bật polling để chắc chắn bắt được thay đổi file
    watch: {
      usePolling: true,
    },
  },
})
