import {
  defineConfig, presetIcons, presetUno, UserConfig,
} from 'unocss';

import transformerDirectives from '@unocss/transformer-directives';

// eslint-disable-next-line import/no-relative-packages
import { kuinneuiPreset } from './packages/styles/src/unoPreset';

export default <UserConfig>defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // Iconify json 集成，后续支持通过 <i class="i-ke-xxx"> 来使用图标原子类，并支持按需打包
        ke: () => import('./packages/icons/dist/icons.json').then((i) => i.default),
      },
    }),

    // 集成完整预设。include 默认情况下集成全部组件的预设配置
    kuinneuiPreset(),

    // 只集成 theme、button、input 组件的预设
    /**
     *   kuinneuiPreset({
          include: ['theme', 'button', 'input'],
        }),
     */

    // 只集成基础预设（包含预置预设、主题）
    // kuinneuiPreset({
    //   include: [],
    // }),
  ],
  transformers: [
    transformerDirectives(),
  ],

});
