<script setup lang="ts">
import { ref, h, Component, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  HomeFilled,
  HelpFilled,
  AppsFilled,
  ManageSearchFilled,
  MenuFilled
} from '@vicons/material'

const router = useRouter()
const route = useRoute()
const windowWidth = ref(0)

onMounted(() => {
  getWindowResize()
  window.addEventListener('resize', getWindowResize)
})
// 获取屏幕尺寸
const getWindowResize = function () {
  windowWidth.value = window.innerWidth
}

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/',
          }
        },
        { default: () => '首页' }
      ),
    key: 'Home',
    icon: renderIcon(HomeFilled)
  },
  {
    label: '小工具',
    key: 'App',
    icon: renderIcon(AppsFilled),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/app/gua',
              }
            },
            { default: () => '八卦速查' }
          ),
        key: 'gua',
        icon: renderIcon(ManageSearchFilled)
      },
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/help',
          }
        },
        { default: () => '帮助' }
      ),
    key: 'Help',
    icon: renderIcon(HelpFilled)
  },
]
</script>

<template>
  <div class="navbar" v-if="windowWidth <= 600">
    
    <div style="flex: 1;">
      <n-popover placement="bottom-start" trigger="click" style="padding: 0;">
        <template #trigger>
          <n-button quaternary >
            <template #icon>
              <n-icon size="30"><MenuFilled /></n-icon>
            </template>
          </n-button>
        </template>
        <div class="large-text">
          <n-menu v-model:value="router.currentRoute.value.name" :options="menuOptions" />
        </div>
      </n-popover>
    </div>
    <h3 style="text-align: center;">生光 · 易学盒子</h3>
    <div style="flex: 1; justify-content: flex-end; text-align: right;">
    </div>
  </div>
  <div class="navbar" v-if="windowWidth > 600">
    <h3 style="flex: 1;">生光 · 易学盒子</h3>
    <div class="large-text">
      <n-menu v-model:value="router.currentRoute.value.name" :options="menuOptions" mode="horizontal" />
    </div>
    <div style="flex: 1; justify-content: flex-end; text-align: right;">
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: solid 1px var(--n-border-color);
}
</style>
