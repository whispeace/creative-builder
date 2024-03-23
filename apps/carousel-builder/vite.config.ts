import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { alias } from '../../alias'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      ...alias,
    },
  },
})
