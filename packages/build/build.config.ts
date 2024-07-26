import { UserConfig } from 'vite';
import { absCwd } from './src/utils';
import { generateConfig as baseGenerateConfig, GenerateConfigOptions } from './src/generateConfig';

/** 构建普通的纯 TS / JS 模块的预设 */
export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig({
    // 指定 d.ts 相关 tsconfig 的位置
    dts: absCwd('../../tsconfig.src.json'),
    ...customOptions,
  }, viteConfig);
}

/** 构建 Vue 组件模块的预设 */
export function generateVueConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return generateConfig({
    pluginVue: true,
    ...customOptions,
  }, viteConfig);
}
