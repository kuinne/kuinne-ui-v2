import { UserConfig } from 'vite';
import { GenerateConfigOptions, generateConfig as baseGenerateConfig } from '../src';
import { absCwd } from '../src/utils';

export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig({
    dts: absCwd('../../tsconfig.src.json'),
    ...customOptions,
  }, viteConfig);
}
