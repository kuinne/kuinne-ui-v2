import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'node:path';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: [
      // 路径别名解析的优先级要高于 npm 模块解析
      // 将所有 import 语句中的 @kuinne/xxx 替换为 ../packages/xxx/src，从而命中源码而非产物，这样源码的更新就会及时通过 HMR 机制反馈到页面上了
      {
        find: /^@kuinne\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
