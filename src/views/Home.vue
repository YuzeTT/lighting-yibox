<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  ManageSearchFilled,
} from '@vicons/material'

const router = useRouter()
const go = (path:string) => {
  router.push(path)
}

const list = [
  '扫码看管理员女装',
  '你阳过了吗',
  '阿伟，你又在算什么哦',
  '你算什么东西？（真诚）',
  '阿里嘎多，美羊羊桑',
  '（拿枪指着算命的）你算算我蹦不崩你'
]
const nowTime = new Date();
const h = nowTime.getHours();

const time_list = [
  '夜已深，注意休息哦！', // 0,1,2
  '晚安全世界！', // 3,4,5
  '早安呀！', // 6,7,8
  '古德猫宁~', // 9,10,11
  '午休时间', // 12,13,14
  '下午好！', // 15,16,17
  '晚上好呀！', // 18,19,20
  '该睡觉咯~' // 21,22,23
]

const getMsg = () => {
  switch (h) {
    case 12:
      return '记得按时吃饭哦！'
    case 15:
      return '三点几勒！饮茶先啊！'
    default:
      return time_list[Math.floor(h/3)]
  }
}

const msg = list[Math.floor((Math.random()*list.length))]
</script>

<template>
  <div>
    <n-list bordered>
      <n-list-item>
        <n-thing :title="getMsg()" :description="msg" />
      </n-list-item>
      <n-list-item @click="go('/app/gua')" style="cursor: pointer;">
        <n-thing title="八卦速查" description="八卦基本信息 / 万物类像 速查表">
          <template #avatar>
            <n-icon size="30">
              <ManageSearchFilled />
            </n-icon>
          </template>
        </n-thing>
      </n-list-item>
    </n-list>
  </div>
</template>

<style scoped>

</style>