import { defineConfig } from 'vite';

export default defineConfig({
  base: "/ICG/",
  resolve: {
    alias: {
      'three': 'three'
    }
  }
});
