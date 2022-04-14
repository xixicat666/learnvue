import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1、axios的基本使用
axios({
  url:'123.207.32.32:8000/home/multidata',
  method:'get',   //默认get请求
  //专门针对get的参数拼接
  params:{
    name:'sqh',
    age:8
  }
}).then(res => {
  console.log(res)
})

//2、axios发送并发请求
//请求的公共信息可以抽离出来放到axios.defaults中

//注意：get请求对应params / post请求对应data
axios.defaults.baseURL=''
axios.defaults.timeout=5000  //单位：毫秒

axios.all([axios({
  url:'',
  params:{

  }
}),axios({
  url:'',
  method:'post'
})]).then((results => {
  console.log(results[1])
  console.log(results[2])
}))

//3、axios的实例  针对axios.defaults中公共信息不同的情况
const instance1 = axios.create({
  baseURL:'',
  timeout:5000
})

const instance2 = axios.create({
  baseURL:'',
  timeout:8000
})

//发送网络请求
instance1({
  url:'/data1',
  params:{

  }
}).then()

instance2({
  url:'/data1',
  params:{

  }
}).then()

//4、封装request模块
import {request} from './network/request'

request({
  url:'',
  params:{

  },
  method:'post'
}).then().catch()
