import { generateVueConfig } from '../build/scripts';

export default generateVueConfig({
  presetKuinneuiOptions: {
    // config-provider 组件暂时没有 UnoCSS 样式预设
    include: [],
  },
});
