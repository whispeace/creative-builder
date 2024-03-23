import { defineConfig } from 'vite'
import {alias} from '../../alias'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      ...alias
    }
  }
})
