import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
//@ts-ignore
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  optimizeDeps: {
    include: ['@react-three/uikit-lucide', '@react-three/uikit'],
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '../../packages/kits/default') },
      { find: '@react-three/uikit', replacement: path.resolve(__dirname, '../../packages/uikit/src/index.ts') },
    ],
  },
})
