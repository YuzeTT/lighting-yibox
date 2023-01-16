<script setup lang="ts">
const props = defineProps<{
  data: number[],
  size?: string
}>()
// const data = [0,1,0]
</script>

<template>
  <n-space vertical>
    <div :class="{
      'yao-small': size === 'small',
      'yao': !size
    }" v-for="(item, index) in props.data" :key="index">
      <div class="box0" v-if="item === 0"></div>
      <div class="box0" v-if="item === 0"></div>
      <div class="box1" v-if="item === 1"></div>
    </div>
  </n-space>
</template>

<style scoped>
.yao {
  display: flex;
  width: 80px;
  justify-content: space-between;
}

.yao-small {
  display: flex;
  width: 40px;
  justify-content: space-between;
}

.box0 {
  height: 6px;
  width: 40%;
  background-color: #333639;
}

.box1 {
  height: 6px;
  width: 100%;
  background-color: #333639;
}
</style>