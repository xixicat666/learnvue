import {ADDCOUNT, DECREMENT, INCREMENT} from "./mutations-type";

export default {
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
}
