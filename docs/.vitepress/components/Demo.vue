<script setup lang="ts">
import { ref } from 'vue'

function toPlayground() {

}

const isCodeShow = ref(false)
</script>

<template>
  <div class="demo">
    <div class="demo-render">
      <!-- 用例渲染插槽 -->
       <slot name="demo"/>
    </div>
    <!-- 各种功能操作，如展开源码，跳转到 Playground 等 -->
     <div class="demo-operators">
      <i class="i-ke-code-screen" title="在 Playground 中编辑" @click="toPlayground"></i>
      <i class="i-ke-code" title="查看源代码" @click="isCodeShow = !isCodeShow"></i>
     </div>
     <div v-if="isCodeShow" class="demo-code">
      <!-- 用例源码插槽 -->
       <slot name="code"/>

       <div class="pb-16px text-center" @click="isCodeShow = false">
        <a href="javascript:;" class="cursor-pointer c-info! no-underline!"></a>
       </div>
     </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  border: 1px solid rgb(var(--ke-color-bd_light));
  border-radius: 4px;
}

.demo-render {
  padding: 20px;
}

.demo-operators {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  font-size: 18px;
  color: rgb(var(--ke-color-secondary));
  border-top: 1px solid rgba(var(--ke-color-bd_light));

  i {
    cursor: pointer;

    + i {
      margin-left: 16px;
    }
  }
}
</style>