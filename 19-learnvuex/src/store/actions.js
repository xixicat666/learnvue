import {ADECREMENT, DECREMENT} from "./mutations-type";

export default {
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
}
