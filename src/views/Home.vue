<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ManageSearchFilled,
} from '@vicons/material'

const router = useRouter()
const msg = ref('')
const go = (path:string) => {
  router.push(path)
}

const list = [
  '扫码看管理员女装',
  '你阳过了吗',
  '阿伟，你又在算什么哦',
  '你算什么东西？（真诚）',
  '阿里嘎多，美羊羊桑'
]
const nowTime = new Date();
const h = nowTime.getHours();

const msg_ = list[Math.floor((Math.random()*list.length))]

switch (h) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    msg.value = '夜已深，注意休息哦！'
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    msg.value = '早安呀！'
    break;
  case 9:
  case 10:
  case 11:
    msg.value = '古德猫宁~'
    break;
  case 12:
    msg.value = '记得按时吃饭哦！'
    break;
  case 13:
    msg.value = '午休时间！'
    break;
  case 14:
    msg.value = '下午真让人犯困！'
    break;
  case 15:
    msg.value = '喂！三点几啦！饮茶先啦！'
    break;
  case 16:
  case 17:
  case 18:
    msg.value = '下午好！'
    break;
  case 19:
  case 20:
  case 21:
    msg.value = '晚上好呀！'
    break;
  case 22:
  case 23:
    msg.value = '该睡觉咯~'
    break;
  default:
    msg.value = '呐呐呐~'
    break;
}
</script>

<template>
  <div>
    <n-list bordered>
      <n-list-item @click="go('/app/gua')" style="cursor: pointer;">
        <n-thing :title="msg" :description="msg_">
          
        </n-thing>
      </n-list-item>
      <n-list-item @click="go('/app/gua')" style="cursor: pointer;">
        <!-- <template #suffix>
          <n-button @click="go('/app/gua')">进入</n-button>
        </template> -->
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