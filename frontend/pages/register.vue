<template>
  <div class="form page">
    <h3>Register</h3>
    <b-form @submit.stop.prevent="handleSubmit">
      <!-- username -->
      <b-form-group id="username" label="Username:" label-for="username">
        <b-form-input
          id="username"
          v-model="username"
          type="text"
          required
          placeholder="Your username here"
        ></b-form-input>
      </b-form-group>
      <!-- email -->
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
    return {
      email: '',
      password: '',
      username: '',
      loading: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push('/courses')
      } catch (error) {
        this.loading = false
        alert(error.message | 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>
<style scoped>
.form {
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
}
.page {
  padding: 20px;
}
</style>
