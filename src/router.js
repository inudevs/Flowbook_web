import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Index from './pages/Index.vue'

const Student = () => import(/* webpackChunkName: "student" */ './pages/Student.vue')
const Upload = () => import(/* webpackChunkName: "upload" */ './pages/Upload.vue')
const Upload_search = () => import(/* webpackChunkName: "upload_search" */ './pages/Upload_search.vue')
const Delete = () => import(/* webpackChunkName: "delete" */ './pages/Delete.vue')
const Report = () => import(/* webpackChunkName: "report" */ './pages/Report.vue')

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
      name: 'delete',
      component: Delete
    },
  ]
})
