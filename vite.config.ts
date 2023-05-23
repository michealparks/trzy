import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [glsl()],
  build: {
    copyPublicDir: false,
    minify: true,
    target: 'esnext',
    lib: {
      entry: 'src/main.ts',
      name: 'trzy',
      fileName: 'trzy',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'three',
        'three/examples/jsm/lines/LineMaterial',
        'three/examples/jsm/lines/LineGeometry',
        'three/examples/jsm/lines/Line2',
        'three-mesh-bvh',
      ],
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          three: 'THREE',
          'three-mesh-bvh': 'THREE_MESH_BVH', 
        },
      },
    },
  },
})
