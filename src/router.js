import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Index from './components/Index.vue'

Vue.use(Router)

// 全局前置守卫
// const router = new VueRouter({ ... })

// router.beforeEach((to, from, next) => {
// })

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      // name: 'home',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const token = localStorage.getItem('mytoken1')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
