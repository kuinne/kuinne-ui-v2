// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//   // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
//   // outDir: 'dist',
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'KuinneButton',
//       // 产物文件名称
//       fileName: 'kuinne-button',
//     },
//     rollupOptions: {
//       external: [
//         // 除了 @kuinne/shared，未来可能还会依赖其它内部模块，不如用正则表达式将 @kuinne 开头的依赖项一起处理掉
//         /@kuinne.*/,
//         'vue',
//       ],
//     },
//     minify: false,
//   },
// });

import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetKuinneuiOptions: {
    include: ['button'],
  },
});
