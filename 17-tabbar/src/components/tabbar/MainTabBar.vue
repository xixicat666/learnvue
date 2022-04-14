<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="pink">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="pink">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="pink">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="pink">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
