// import { defineConfig } from 'vite';

// export default defineConfig({
//   // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
//   // outDir: 'dist',
//   build: {
//     // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
//     lib: {
//       // 构建的入口文件
//       entry: './src/index.ts',

//       // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
//       // formats: ['es', 'umd'],

//       // 当产物为 umd、iffe 格式时， 该模块暴露的全局变量名称
//       name: 'KuinneShared',
//       // 产物文件名称
//       fileName: 'kuinne-shared',
//     },
//     // 参考：https://cn.vitejs.dev/config/build-options.html#build-rollupoptions
//     rollupOptions: {
//       // 确保外部话处理那些你不想打包进库的依赖
//       external: [/lodash.*/],
//       output: {
//         // 在 UMD 构建模式下为这些外部的依赖提供一个全局变量。即使不设置，构建工具也会为我们自动生成。个人倾向于不设置
//         globals: {
//           lodash: 'lodash',
//         },
//       },
//     },
//     // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
//     minify: false,
//   },
// });

import { generateConfig } from '../build/build.config';

export default generateConfig();
