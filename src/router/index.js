import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import table from '@/components/table'
import login from '@/components/login'
Vue.use(Router)

var router = new Router({
  routes: [

  ]
})

window.setTimeout(function () {
  router.addRoutes([
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/',
          component: table
        },
        {
          path: '/2',
          component: login
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ])
}, 1)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var auth = sessionStorage['auth']
    if (!auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
