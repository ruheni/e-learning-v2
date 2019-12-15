<template>
  <div class="courses">
    <!-- if content is loading -->
    <div class="text-center" v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
    <!-- if content is loaded, loop through courses and display them in form of cards -->
    <div v-for="course in courses" :key="course.id">
      <b-card :title="course.course_name">
        <b-card-text>Units: {{ course.units.length }}</b-card-text>
        <nuxt-link :to="'courses/' + course.id" class="card-link">View Units</nuxt-link>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courses: [],
      loading: false
    }
  },
  async created() {
    try {
      // set loading to true
      // fetch page content
      // on completion of loading, set loading to false
      this.loading = true
      const res = await this.$axios
        .$get('http://localhost:1337/courses')
        .then(res => {
          this.courses = res
          this.loading = false
        })
    } catch (error) {
      // in case of error, display error in form of an alert
      alert(error || 'An error occured')
    }
  }
}
</script>
<style scoped>
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin: 50px 20px;
}
</style>