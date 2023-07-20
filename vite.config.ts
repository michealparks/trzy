import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    glsl(),
  ],
  build: {
    target: 'esnext',
    copyPublicDir: false,
    minify: false,
    lib: {
      entry: 'src/main.ts',
      name: 'trzy',
      fileName: 'trzy',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'three',
        'three/examples/jsm/lines/LineMaterial',
        'three/examples/jsm/lines/LineGeometry',
        'three/examples/jsm/lines/Line2',
        'three/examples/jsm/capabilities/WebGPU',
        'three/examples/jsm/renderers/webgpu/WebGPURenderer',
        'three/examples/jsm/loaders/GLTFLoader',
        'three/examples/jsm/webxr/XRControllerModelFactory',
        'three/examples/jsm/webxr/XRHandModelFactory',
      ],
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
    },
  },
})
