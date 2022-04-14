<template>
  <div>
    <h2>我是档案</h2>
    {{this.$route.query}}
    {{this.$route.query.name}}
    {{this.$route.query.age}}
  </div>
</template>

<script>
export default {
  name: "ProFile"
}
</script>

<style scoped>

</style>
