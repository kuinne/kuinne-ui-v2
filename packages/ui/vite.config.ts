import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'KuinneUi',
      fileName: 'kuinne-ui',
    },
    minify: false,
    rollupOptions: {
      external: [/@kuinne.*/, 'vue'],

      output: {},
    },
  },
});
