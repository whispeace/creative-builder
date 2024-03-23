import { defineConfig } from 'vite'
import {alias} from '../../alias'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      ...alias
    }
  }
})
