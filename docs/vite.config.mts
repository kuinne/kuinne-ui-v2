import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import { join } from 'node:path';

export default defineConfig({
  plugins: [
    // 应用组件库的 unocss 预设，配置文件在根目录的 uno.config.ts
    // 集成 UnoCSS 方便我们编写组件用例，或者实现 VitePress 专用组件
    unocss(),
  ],
  resolve: {
    alias: [
      {
        // 将 @kuinne/xxx 内部依赖定位到源码路径
        find: /^@kuinne\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
