<template>
  <div>
    <div class="container">
      <div class="links">
        <h1></h1>
        <nuxt-link to="/courses">Go to courses page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
