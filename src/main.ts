import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// const loadingBar = useLoadingBar()

// // 当路由进入前
// router.beforeEach((to, from, next) => {
//   // 每次切换页面时，调用进度条
//   loadingBar.start()
//   // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
//   next()
// })
// // 当路由进入后：关闭进度条
// router.afterEach(() => {
//   // 在即将进入新的页面组件前，关闭掉进度条
//   loadingBar.finish()
// })

createApp(App).use(createPinia()).use(router).mount('#app')
