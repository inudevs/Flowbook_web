import Vue from 'vue'
import Vuex from 'vuex'
import router from './router' // vue 객체 내에서 작업하는것이 아니기 때문에 router를 따로 import 시켜줘야함
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers:[
      {id: 1, name:'hoza', email:'hoza@gmail.com', password:"123456"},
      {id: 2, name:'lego', email:'lego@gmail.com', password:"123456"}
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인이 성공했을때
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    // 로그인이 실패했을때
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLogin = false
      state. userInfo = null
    }
  },
  actions: {
    // 로그인 시도
    login({commit}, loginObj) 
    {
      axios
      .post('https://reqres.in/api/login', loginObj) // 두번째 인자로 파라미터(body)전송 가능 
      .then(response => {
        console.log("서버접속 성공")
        console.log(response)

        // 성공 시 토큰을 헤더에 포함시켜서 유저 정보를 요청
        let token = response.data.token
        let config = {
          headers: {
            "access-token": token
          }
        }
        axios
        .get('https://reqres.in/api/users/2', config) // 두번째 인자로 위에서 만들었던 토큰 객체 전달 
        .then(response => {
          //성공
          console.log("유저정보 취득 성공")
          let userInfo = {
            id: response.data.data.id,
            email: response.data.data.email,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            avatar: response.data.data.avatar
          }
          commit('loginSuccess', userInfo)
        })
        .catch(error => {
          //에러
          console.log("유저정보 취득 실패")
          alert("이메일과 비밀번호를 확인하세요")
        })
      })
      .catch(error => {
        console.log("서버접속 실패")
        console.log(error)
      })
    },
    logout({commit}) {
      commit('logout')
      router.push({name: "home"})
    }
  }
})
