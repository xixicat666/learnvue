export default {
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
}
