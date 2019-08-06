import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Index from './pages/Index.vue'

const Student = () => import(/* webpackChunkName: "student" */ './pages/Student.vue')
const Upload = () => import(/* webpackChunkName: "upload" */ './pages/Upload.vue')
const Upload_search = () => import(/* webpackChunkName: "upload_search" */ './pages/Upload_search.vue')
const Delete = () => import(/* webpackChunkName: "delete" */ './pages/Delete.vue')
const Report = () => import(/* webpackChunkName: "report" */ './pages/Report.vue')
const Login = () => import(/* webpackChunkName: "login" */ './pages/auth/Login.vue')
<<<<<<< HEAD
=======
const Register = () => import(/* webpackChunkName: "register" */ './pages/auth/Register.vue')
>>>>>>> 4dd57737def03f459c7f233df6bc7c053a9b4c7f

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
      path: '/upload_search',
      name: 'upload_search',
      component: Upload_search
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/report',
<<<<<<< HEAD
      name: 'delete',
      component: Report
=======
      name: 'report',
      component: Report
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
>>>>>>> 4dd57737def03f459c7f233df6bc7c053a9b4c7f
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    }
  ]
})
