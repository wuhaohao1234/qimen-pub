import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/yinyang',
    name: 'YinYang',
    component: () => import('../views/YinYang.vue')
  },
  {
    path: '/tiangan',
    name: 'TianGan',
    component: () => import('../views/TianGan.vue')
  },
  {
    path: '/dizhi',
    name: 'DiZhi',
    component: () => import('../views/DiZhi.vue')
  },
  {
    path: '/jiugong-bagua',
    name: 'JiuGongBaGua',
    component: () => import('../views/JiuGongBaGua.vue')
  },
  {
    path: '/jiuxing',
    name: 'JiuXing',
    component: () => import('../views/JiuXing.vue')
  },
  {
    path: '/bamen',
    name: 'BaMen',
    component: () => import('../views/BaMen.vue')
  },
  {
    path: '/bashen',
    name: 'BaShen',
    component: () => import('../views/BaShen.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 