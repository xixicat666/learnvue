<template>
  <div>
    <h2>我是用户</h2>
    {{userId}}
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
