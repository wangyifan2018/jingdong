import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home/HomePage.vue'
import LoginPage from '../views/login/LoginPage.vue'
import RegisterPage from '../views/register/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLOginOrRegister = (name === 'LoginPage' || name === 'RegisterPage')
  if (!isLogin && !isLOginOrRegister) {
    next({ name: 'LoginPage' })
  } else if (isLogin && isLOginOrRegister) {
    next({ name: 'HomePage' })
  } else {
    next()
  }
})

export default router
