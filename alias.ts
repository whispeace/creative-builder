import { resolve } from 'node:path'

export const alias: Record<string, string> = {
  '@': '/src/',
  '@utils': resolve(__dirname, './packages/utils')
}
