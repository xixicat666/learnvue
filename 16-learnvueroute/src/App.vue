<template>
  <div id="app">
    <!--  使用路由  -->
    <!-- tag：router-link改为其他标签
         replace：push/pop改为replace   不能前后翻页
         active-class：修改router-link-active简称-->
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
        <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--    <router-link to="/home" tag="button">首页</router-link>
        <router-link to="/about" tag="button">关于</router-link>-->

    <!--  代码实现路由功能  -->
    <!--    <button @click="clickhome">首页</button>
        <button @click="clickabout">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!--  数值传递  -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/proFile', query:{name:'aaa',age:8}}">档案</router-link>
    <!--  代码实现路由传值功能  -->
    <!--    <button @click="userClick">用户</button>
        <button @click="proFileClick">档案</button>-->

    <!--  keep-alive标签的作用是保持当前组件活着，避免频繁被创建和销毁
          只有组件使用keep-alive时，才能够调用activated/deactivated函数-->

    <!--  exclude是排除某个组件，填入组件的name，注：逗号之间不能有空格  -->
    <keep-alive exclude="About,Home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi'
    }
  },
  methods:{
    clickhome(){
      //this.$router.push('/home')
      this.$router.replace('/home')
    },
    clickabout(){
      //this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    proFileClick(){
      this.$router.push({
        path:'/proFile',
        query:{
          name:'bbb',
          age:9
        }
      })
    }
  }
}
</script>

<style>
.active{
  color: #f00;
}
</style>
