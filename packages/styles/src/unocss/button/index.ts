import { UserConfig } from 'unocss';
import { cssVarsToString, generateCssVars } from '../../utils';
import { buttonVars } from '../../vars';

export const buttonConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(buttonVars)),
    },
  ],
};
