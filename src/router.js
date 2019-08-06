import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Index from './pages/Index.vue'

const Student = () => import(/* webpackChunkName: "student" */ './pages/Student.vue')
const Upload = () => import(/* webpackChunkName: "upload" */ './pages/Upload.vue')
const Search = () => import(/* webpackChunkName: "Search" */ './pages/Search.vue')
const Delete = () => import(/* webpackChunkName: "delete" */ './pages/Delete.vue')
const Report = () => import(/* webpackChunkName: "report" */ './pages/Report.vue')
const Login = () => import(/* webpackChunkName: "login" */ './pages/auth/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ './pages/auth/Register.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/upload/search',
      name: '/upload/search',
      component: Search
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})
