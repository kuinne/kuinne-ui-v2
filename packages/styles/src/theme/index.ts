import { App, inject, Plugin } from 'vue';
import { isObjectLike } from '@kuinne/shared';
import { KuinneuiCssVarsConfig, themeColorLevelsEnabledKeys } from '../vars';
import { generateCssVars } from '../utils';

const THEME_PROVIDE_KEY = '__KuinneUITheme__';

function useGlobalTheme(app:App, options?: KuinneuiCssVarsConfig) {
  /** 设置全局主题变量的方法 */
  function setTheme(styleObj:KuinneuiCssVarsConfig) {
    // 设置主题变量时， 兼顾主题色的色阶
    const cssVars = generateCssVars(styleObj, {
      colorLevelsEnableKeys: themeColorLevelsEnabledKeys,
      colorLevels: 9,
    });
    Object.entries(cssVars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v);
    });
  }

  const result = { setTheme };
  app.provide(THEME_PROVIDE_KEY, result);

  if (isObjectLike(options) && Object.keys(options).length > 0) {
    setTheme(options);
  }
  return result;
}

type KuinneUITheme = ReturnType<typeof useGlobalTheme>;

export function useTheme() {
  const result = inject<KuinneUITheme>(THEME_PROVIDE_KEY);
  if (!result) {
    throw new Error('userTheme() must be used after app.use(Theme)!');
  }
  return result;
}

export const Theme: Plugin<KuinneuiCssVarsConfig> = {
  install: (app, ...options) => {
    const finalOptions: KuinneuiCssVarsConfig = {};
    options.forEach((item) => {
      Object.assign(finalOptions, item);
    });

    useGlobalTheme(app, finalOptions);
  },
};

export * from './presets';
