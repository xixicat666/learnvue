<template>
  <div id="app">
    <h2>子模块中的信息</h2>
    {{$store.state.a.name}}
    {{$store.getters.fullName}}
    {{$store.getters.fullName1}}
    {{$store.getters.fullName2}}
    <button @click="updateName">修改name</button>
    <button @click="aupdateName">异步修改name</button>

    <h2>主模块中的信息</h2>
    {{$store.state.counter}}
    {{$store.getters.pinfang}}
    {{$store.getters.lifang}}
    {{$store.getters.jisuan(2)}}
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

import {INCREMENT} from './store/mutations-type'
import {DECREMENT} from './store/mutations-type'
import {ADDCOUNT} from './store/mutations-type'
import {ADECREMENT} from './store/mutations-type'
import {UPDATENAME} from './store/mutations-type'
import {AUPDATENAME} from './store/mutations-type'

export default {
  name: 'App',
  methods:{
    add(){
      this.$store.commit(INCREMENT)
    },
    sub(){
      //this.$store.commit(DECREMENT)
      //通过dispatch调用actions中的异步操作
      //this.$store.dispatch(ADECREMENT)
      //dispatch可以返回Promise  然后得知异步操作已完成
      this.$store.dispatch(ADECREMENT).then((data) => {
        console.log(data)
      })
    },
    //count称作payload(挂载)
    addCount(count){
      //1、普通的提交封装
      this.$store.commit(ADDCOUNT,count)
      //2、特殊的提交封装
      /*this.$store.commit({
        type:'addCount',
        count
      })*/
    },
    updateName(){
      this.$store.commit(UPDATENAME)
    },
    aupdateName(){
      this.$store.dispatch(AUPDATENAME)
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>
</style>
