import {AUPDATENAME, UPDATENAME} from "../mutations-type";

export default {
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
