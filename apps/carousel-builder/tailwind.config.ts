import config from 'tailwind/tailwind.config'
import type { Config } from 'tailwindcss'

// noinspection JSUnusedGlobalSymbols
export default {
  presets: [config],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
} as Config
