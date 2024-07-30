import { UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
import { cssVarsToString, generateCssVars } from '../utils';
import { themeColorLevelsEnabledKeys, themeVars } from '../vars';

/** 主题部分预设 */
export const themeConfig: UserConfig<Theme> = {
  preflights: [
    {
      // 在生成的 css 样式文件中填入所有主题变量的定义
      getCSS: () => cssVarsToString(
        generateCssVars(themeVars, {
          colorLevelsEnableKeys: themeColorLevelsEnabledKeys,
          colorLevels: 9,
        }),
      ),
    },
  ],
};
