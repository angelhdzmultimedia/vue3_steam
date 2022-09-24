import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { transformAssetUrls, quasar } from '@quasar/vite-plugin'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    vue({template: transformAssetUrls}),
    quasar({})
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@server': resolve(__dirname, '../xxxx/src'),
    }
  }
})
