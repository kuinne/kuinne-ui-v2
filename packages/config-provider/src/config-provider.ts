import { InferVueDefaults } from '@kuinne/shared';
import { KuinneuiCssVarsConfig } from '@kuinne/styles';
import { Component } from 'vue';
import type ConfigProvider from './config-provider.vue';

export interface ConfigProviderProps {
  /** 组件的节点将被渲染的标签类型 */
  tag?: string | Component;

  /** 应用在该节点上的主题变量 */
  themeVars?: KuinneuiCssVarsConfig
}

export function defaultConfigProviderProps(): Required<InferVueDefaults<ConfigProviderProps>> {
  return {
    tag: 'div',
    themeVars: () => ({}),
  };
}

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
