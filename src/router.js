import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Index from './pages/Index.vue'

const Student = () => import(/* webpackChunkName: "student" */ './pages/Student.vue')
const Upload = () => import(/* webpackChunkName: "upload" */ './pages/Upload.vue')
const Search = () => import(/* webpackChunkName: "search" */ './pages/Search.vue')
const Delete = () => import(/* webpackChunkName: "delete" */ './pages/Delete.vue')
const Report = () => import(/* webpackChunkName: "report" */ './pages/Report.vue')
const Login = () => import(/* webpackChunkName: "login" */ './pages/auth/Login.vue')
const Create = () => import(/* webpackChunkName: "create" */ './pages/auth/Create.vue')

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
      name: 'search',
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
      path: '/auth/create',
      name: 'create',
      component: Create
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})
