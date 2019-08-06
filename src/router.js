import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

//import Login from '@/pages/auth/Login.vue'
//import Register from '@/pages/auth/Register.vue'
//import Index from '@/pages/Index.vue'
//import Report from '@/pages/Report.vue'
//import Delete from '@/pages/manage/Delete.vue'
//import Student from '@/pages/manage/Student.vue'
//import Upload from '@/pages/Upload.vue'

const 

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
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
