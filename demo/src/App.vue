<script setup lang="ts">
// demo/src/App.vue
import {
  Button,
  ConfigProvider,
  KuinneuiCssVarsConfig,
  themeVars,
  tinyThemeVars,
  useTheme,
} from '@kuinne/ui';
import { reactive, ref } from 'vue';

const { setTheme } = useTheme();

const currentGlobalTheme = ref<'default' | 'tiny'>('default');

// 全局主题切换

function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'tiny') {
    currentGlobalTheme.value = 'default';
    setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'tiny';
    setTheme(tinyThemeVars);
  }
}

const currentSecondLineTheme = ref<'default' | 'tiny'>('default');
const secondLineThemeVars: KuinneuiCssVarsConfig = reactive({});

// 局部主题切换
function switchSecondLineTheme() {
  if (currentSecondLineTheme.value === 'tiny') {
    currentSecondLineTheme.value = 'default';
    Object.assign(secondLineThemeVars, themeVars);
  } else {
    currentSecondLineTheme.value = 'tiny';
    Object.assign(secondLineThemeVars, tinyThemeVars);
  }
}
</script>

<template>
  <div>
    <div class="btns">
      <Button>Button</Button>
      <Button type="primary">
        Button
      </Button>
      <Button type="success">
        Button
      </Button>
      <Button type="danger">
        Button
      </Button>
      <Button type="warning">
        Button
      </Button>
      <Button type="info">
        Button
      </Button>
    </div>
    <ConfigProvider :theme-vars="secondLineThemeVars">
      <div class="btns">
        <Button plain>
          Button
        </Button>
        <Button type="primary" plain>
          Button
        </Button>
        <Button type="success" plain>
          Button
        </Button>
        <Button type="danger" plain>
          Button
        </Button>
        <Button type="warning" plain>
          Button
        </Button>
        <Button type="info" plain>
          Button
        </Button>
      </div>
    </ConfigProvider>
    <div class="btns">
      <Button disabled>
        Button
      </Button>
      <Button type="primary" disabled>
        Button
      </Button>
      <Button type="success" disabled>
        Button
      </Button>
      <Button type="danger" disabled>
        Button
      </Button>
      <Button type="warning" disabled>
        Button
      </Button>
      <Button type="info" disabled>
        Button
      </Button>
    </div>
    <div class="btns">
      <Button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </Button>
      <Button @click="switchSecondLineTheme">
        切换全局主题，当前：{{ currentSecondLineTheme }}
      </Button>
    </div>
    <div>
      <i class="i-ke-alert text-100px c-primary inline-block" />
      <i class="i-ke-alert-marked text-60px c-success inline-block" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btns {
  :deep(.op-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
