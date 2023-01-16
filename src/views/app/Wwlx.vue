<script setup lang="ts">
import Gua from '../../components/Gua.vue';
import gua from '../../data/gua'

</script>

<template>
  <div>
    <!-- <n-card title="乾卦">
      <template #header-extra>
        #header-extra
      </template>
      <Gua :data="[1,1,1]" />
      <template #footer>
        #footer
      </template>
    </n-card> -->

    <n-list bordered>
      <n-list-item v-for="(item, index) in gua" :key="index">
        <template #prefix>
          <Gua :data="item.data" size="small" />
        </template>
        <template #suffix>
          <n-button>查看</n-button>
        </template>
        <n-thing :title="item.name" />
        <n-space>
          <div>
            五行：
            <n-tag :bordered="false" type="success">
              {{ item.wuxing }}
            </n-tag>
          </div>
          <div>
            象征：
            <n-tag :bordered="false" type="info">
              {{ item.xiangzheng }}
            </n-tag>
          </div>
        </n-space>
      </n-list-item>
    </n-list>
  </div>
</template>

<style scoped>

</style>