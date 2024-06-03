import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/ICG/",
  resolve: {
    alias: {
      'three': resolve(__dirname, 'node_modules/three'),
      'three/examples/jsm/controls': resolve(__dirname, 'node_modules/three/examples/jsm/controls')
    }
  }
})
