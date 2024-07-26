// import { defineConfig } from 'vite';

import { defineConfig } from 'vite';
import { generateVueConfig } from '../build/build.config';

// export default defineConfig({
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'KuinneUi',
//       fileName: 'kuinne-ui',
//     },
//     minify: false,
//     rollupOptions: {
//       external: [/@kuinne.*/, 'vue'],

//       output: {},
//     },
//   },
// });

export default defineConfig(({ mode }) => generateVueConfig({ mode }));
