<template>
  <div>
    <div class="text-center" v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
    <!-- check if course has units if not, display no units -->
    <!-- if units are available, display list of units in the course -->
    <div class="course">
      <h2>{{ course.course_name }}</h2>
      <!-- check if courses units is not null      -->
      <p v-if="course.units <= 0">
        There are no units yet in this course yet
        <br />
        <nuxt-link to="/courses">Go back to courses</nuxt-link>
      </p>
      <div v-else>
        <ul v-for="unit in course.units" :key="unit.id">
          <nuxt-link :to="'../units/' + unit.id">{{ unit.unit_name }}</nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      course: {},
      loading: false
    }
  },
  async created() {
    try {
      const res = await this.$axios
        .$get(`http://localhost:1337/courses/${this.$route.params.id}`)
        .then(res => (this.course = res))
    } catch (error) {
      alert(error || 'An error occured')
    }
  },
  methods: {}
}
</script>
<style scoped>
.course {
  margin: 50px 20px;
}
.course h2,
.course p {
  margin-left: 20px;
}
</style>