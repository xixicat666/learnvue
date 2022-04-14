//axios的封装   减小项目对外部框架的以来
import axios from 'axios'

export function request(config){
  //1、创建axios实例
  const instance = axios.create({
    baseURL:'',
    timeout:5000
  })

  //2、axios拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(data => {
    //1、比如data中的信息不符合网络的要求 在这里可做修改
    //2、比如每次发送网络请求时，希望在界面展示一个请求图标
    //3、某些网络请求（登录token），必须携带一些特殊信息
    return data
  },err => {
    console.log(err)
  })
  //2.2响应拦截
  instance.interceptors.request.use(res => {
    console.log(res.data)
    return res.data
  },err => {
    console.log(err)
  })

  //3、发送真正的网络请求
  return instance(config)  //返回的是Promise对象
}
