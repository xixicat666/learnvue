import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

//1、安装插件
Vue.use(Vuex)

const state = {
  //初始化时就定义好的数据，刚开始就会加入到响应式系统中
  counter:1000
}

//2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  //取数据经过变化后的数值
  getters,
  modules:{
    //a会自动放入到主模块的state中
    a:moduleA
  }
})

//3、导出store独享
export default store
