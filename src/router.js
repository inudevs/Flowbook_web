import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store'
// import axios from 'axios'

import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import Index from '@/pages/Index.vue'
import Report from '@/pages/Report.vue'
import Delete from '@/pages/manage/Delete.vue'
import Student from '@/pages/manage/Student.vue'

Vue.use(Router)

/*
const requireAuth = (to, from, next) => {
  if (localStorage.userInfo) {
    axios.defaults.headers.common['authorization'] = localStorage.userToken
    store.commit('setUserInfo', JSON.parse(localStorage.userInfo))
    store.commit('setIsAuth', true)
    return next()
  }

  if (store.getters.userInfo) return next()
  next('/auth/login')
}

const forbidAuth = (to, from, next) => {
  if (localStorage.userInfo) {
    axios.defaults.headers.common['authorization'] = localStorage.userToken
    store.commit('setUserInfo', JSON.parse(localStorage.userInfo))
    store.commit('setIsAuth', true)
  }
  if (store.getters.getIsAuth) return next('/')
  next()
}
*/

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register
    },
    {
      path: '/manage/student',
      name: 'student',
      component: Student
    },
    {
      path: '/manage/book',
      name: 'delete',
      component: Delete
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    }
  ]
})
