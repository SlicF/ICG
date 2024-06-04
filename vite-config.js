import { defineConfig } from 'vite'

export default defineConfig({
  base: "/ICG/",
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        hud: 'hud.html',
        hud_controls: 'hud_controls.html',
        pause: 'pause.html'
      }
    }
  }
})
