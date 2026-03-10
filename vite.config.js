import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: { quality: 75, compressionLevel: 8 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 75, lossless: false },
    }),
  ],
  build: {
    // Split large libraries into separate chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'three':  ['three'],
          'gsap':   ['gsap'],
        },
      },
    },
    // Raise asset inline threshold — small images become base64 (reduces requests)
    assetsInlineLimit: 8192,
    // Enable source maps for production debugging
    sourcemap: false,
    // Target modern browsers (smaller output)
    target: 'es2020',
    // Minify aggressively
    minify: 'esbuild',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Performance: pre-bundle dependencies
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
});
