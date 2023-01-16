<script setup lang="ts">
import { useRoute } from 'vue-router'
import Gua from '../../components/Gua.vue';
import gua from '../../data/gua'
import wwlx from '../../data/wwlx'

const route = useRoute()
</script>

<template>
  <n-tabs type="segment" animated :default-value="parseInt(route.query.id as string) -1 || 0">
    <n-tab-pane :name="index" :tab="item.name" v-for="(item, index) in gua" :key="index">
      <div style="display: flex; align-items: center; gap: 15px; justify-content: center; margin-top: 10px;">
        <Gua :data="item.data" size="small" />
        <div>
          <div class="name1">{{ item.name }}</div>
        </div>
      </div>
      <div style="margin: 15px 0" />
      <n-card>
        <n-row style="text-align: center;">
          <n-col :span="8">
            <n-statistic label="五行">
              {{ item.wuxing }}
            </n-statistic>
          </n-col>
          <n-col :span="8">
            <n-statistic label="自然象征">
              {{ item.xiangzheng }}
            </n-statistic>
          </n-col>
          <n-col :span="8">
            <n-statistic label="先天方位">
              {{ item.fangwei }}
            </n-statistic>
          </n-col>
        </n-row>
      </n-card>
      <div style="margin: 15px 0" />
      <n-collapse>
        <n-collapse-item title="万物类像（数据量较大，点击后耐心等待）" name="1">
          <div>
            <n-list bordered>
              <n-list-item  v-for="(item_, index_) in wwlx[index].data" :key="index">
                <n-tag :bordered="false" type="info" style="margin-right: 5px;">
                  {{ item_[0] }}
                </n-tag>
                {{ item_[1] }}
              </n-list-item>
            </n-list>
          </div>
        </n-collapse-item>
      </n-collapse>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped>
.name1 {
  font-weight: bold;
  font-size: 1.8rem;
}

.name2 {

  font-size: 1rem;
}
</style>