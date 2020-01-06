<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Riara University</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Using 'button-content' slot -->
        <b-nav-item v-if="username">
          <em>Hello {{ username }}</em>
        </b-nav-item>

        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item v-if="!username" to="/register">Sign Up</b-nav-item>
        <b-nav-item v-if="!username" to="/login">Login</b-nav-item>
        <b-nav-item v-if="username" @click="logout">Sign Out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
 <script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    username() {
      return this.$store.getters['auth/username']
    }
  },
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>
<style scoped>
</style>
