import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    sveltekit(),
    glsl(),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['.'],
    },
  },
})
