import Vue from 'vue'
import Vuex from 'vuex'
import router from './router' // vue 객체 내에서 작업하는것이 아니기 때문에 router를 따로 import 시켜줘야함
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: [
      
    ]
  },
  mutations: {
    
  },
  actions: {
  }
})
