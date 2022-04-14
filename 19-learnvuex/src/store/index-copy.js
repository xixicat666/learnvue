import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutations-type'
import {DECREMENT} from './mutations-type'
import {ADDCOUNT} from './mutations-type'
import {ADECREMENT} from './mutations-type'
import {UPDATENAME} from './mutations-type'
import {AUPDATENAME} from './mutations-type'


/*
*
* 分块管理前
* 比较乱
*
* */





//1、安装插件
Vue.use(Vuex)

const moduleA = {
  state:{
    name:'zhangsan'
  },
  //子模块中的mutations同主模块中的mutations调用方式一样，因此type(名称)不能重复
  mutations:{
    [UPDATENAME](state){
      state.name = 'lisi'
    }
  },
  actions:{
    //子模块中的context只能调用子模块自己本身的mutations   不等于store
    //context可以拿到 state getters rootState  rootGetters
    [AUPDATENAME](context){
      setTimeout(() => {
        context.commit(UPDATENAME)
      })
    }
  },
  //同主模块中的调用方式相同 因此type(名称)不能重复
  getters:{
    fullName(state){
      return state.name + '111'
    },
    fullName1(state,getters){
      return getters.fullName + '222'
    },
    //rootState拿到主模块中的state
    fullName2(state,getters,rootState){
      return getters.fullName1 + rootState.counter
    }
  }
}

const state = {
  //初始化时就定义好的数据，刚开始就会加入到响应式系统中
  counter:1000
}

//2、创建对象
const store = new Vuex.Store({
  state,
  mutations:{
    [INCREMENT](state){
      state.counter++
    },
    [DECREMENT](state){
      state.counter--
      //mutations中不可以写异步操作，devtools无法跟踪
      /*setTimeout(() => {
        state.counter--
      },1000)*/
    },
    //如果传递多个参数  可以传入对象
    [ADDCOUNT](state,payload){
      //1、普通的获取
      state.counter = state.counter + payload
      //2、特殊的获取
      //state.counter = state.counter + payload.count

      //添加删除内容响应式方法
      //添加  Vue.set()
      //删除  Vue.delete()
    }
  },
  actions:{
    //context:上下文  相当于store
    [ADECREMENT](context){
      //异步操作写在action中，devtools可以跟踪
      /*setTimeout(() => {
        context.commit(DECREMENT)
      },1000)*/
      //dispatch可以返回Promise
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          //action必须通过mucations进行操作，不能跨过该过程
          context.commit(DECREMENT)
          resolve('111')
        },1000)
      })
    }
  },
  //取数据经过变化后的数值
  getters:{
    //1、类似于计算属性的使用
    pinfang(state){
      return state.counter * state.counter
    },
    //2、传入getters方式的使用
    lifang(state,getters){
      return state.counter * getters.pinfang
    },
    //3、方法传入数值，返回函数方式的使用
    jisuan(state){
      return function(a){
        return state.counter * a
      }
    }
  },
  modules:{
    //a会自动放入到主模块的state中
    a:moduleA
  }
})

//3、导出store独享
export default store
