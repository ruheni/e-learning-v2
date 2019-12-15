<template>
  <div class="form">
    <h3>Login</h3>
    <b-form @submit.stop.prevent="login">
      <!-- username -->
      <b-form-group id="email" label="Email address:" label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Your Email here"
        ></b-form-input>
      </b-form-group>
      <!-- password -->
      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Your password here..."
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data() {
    return { email: '', password: '', loading: false }
  },
  methods: {
    async login() {
      try {
        this.loading = true
        const response = await strapi.login(this.email, this.password)
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/')
      } catch (error) {
        this.loading = false
        alert(error.messsage || 'An error occured')
      }
    }
  },
  ...mapMutations({
    setUser: 'auth/setUser'
  })
}
</script>
<style scoped>
.form {
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
}
</style>