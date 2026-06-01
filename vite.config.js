import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- KUNCI UTAMA: TAMBAHKAN IMPORT INI

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- KUNCI UTAMA: PASANG PLUGIN TAILWIND DI SINI
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})