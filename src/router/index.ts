import { createRouter, createWebHistory } from 'vue-router'
import { useProviderStore } from '../stores/provider'

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/app',
    children: [
      {
        path: 'wwlx',
        component: () => import("../views/app/Wwlx.vue"),
      },
      {
        path: 'gua',
        name: 'gua',
        component: () => import("../views/app/Gua.vue"),
      },
    ]
  },
  {
    path: '/help',
    name: "Help",
    component: () => import("../views/Help.vue"),
  },
  // {
  //   path: '/u/:id',
  //   name: 'Home',
  //   component: () => import('../views/Home/Home.vue'),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  useProviderStore().loadingBar?.start()
})

router.afterEach(() => {
  useProviderStore().loadingBar?.finish()
})

export default router