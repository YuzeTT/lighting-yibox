<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'
import { NMessageProvider, NLoadingBarProvider, useLoadingBar } from 'naive-ui'
import Navbar from './components/Navbar.vue';
import { useProviderStore } from './stores/provider'

const provider = useProviderStore()

const ViewComponent = defineComponent({
  render: () => h(RouterView),
  setup: () => {
    provider.setLoadingBar(useLoadingBar())
  }
})
</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <div>
        <n-layout>
          <n-layout-header><Navbar /></n-layout-header>
          <n-layout-content content-style="padding: 15px; background-color: #FAFAFC;">
            <div style="max-width: 600px; margin: 0 auto;">
              <ViewComponent/>
            </div>
          </n-layout-content>
          <n-layout-footer></n-layout-footer>
        </n-layout>
      </div>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<style scoped>

</style>
