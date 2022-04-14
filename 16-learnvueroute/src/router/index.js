//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'*/

//路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const ProFile = () => import('../components/ProFile')

//1、通过Vue.use(插件)安装插件
Vue.use(VueRouter)

//2、创建Router对象
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes: [
    {
      //默认路径
      path:'',
      //重定向
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{
        title:'首页'
      },
      children:[
        {
          path:'',
          redirect:'new'
        },
        {
          //子路由不加/
          path:'new',
          component:News
        },
        {
          path:'message',
          component:Message
        }
      ]
    },
    {
      path:'/about',
      component:About,
      meta:{
        title:'关于'
      }
    },
    {
      //动态路由
      path:'/user/:userId',
      component:User,
      meta:{
        title:'用户'
      }
    },
    {
      path:'/proFile',
      component:ProFile,
      meta:{
        title:'档案'
      }
    }
  ],
  mode:'history',
  //统一修改自带的router-link-active   class的简写
  //linkActiveClass:'active'
})

//前置守卫(gurde)
router.beforeEach((to,from,next) => {
  //从from跳转至to
  document.title = to.matched[0].meta.title
  next()
})

//后置守卫(gurde)
router.afterEach((to , from) => {

})


//3、将router对象传入到Vue实例中
export default  router
