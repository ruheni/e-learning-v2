<template>
  <div class="page">
    <div class="text-center" v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>
    <!-- check if course has units if not, display no units -->
    <!-- if units are available, display list of units in the course -->
    <p>{{user_course}}</p>
    <nuxt-link to="/courses">&larr; Go to courses page</nuxt-link>

    <div class="course">
      <!-- course title -->
      <h2 class="title">{{ course.course_name }}</h2>
      <!-- course description  -->
      <p class="description">{{ course.course_description }}</p>
      <!-- check if courses units is not null      -->
      <p class="no-courses" v-if="course.units <= 0">
        There are no units yet in this course
        <br />
        <nuxt-link to="/courses">Go back to courses</nuxt-link>
      </p>
      <div class="course" v-else>
        <h4>The following units are available in this course:</h4>
        <div class="units">
          <div v-for="unit in course.units" :key="unit.id">
            <nuxt-link :to="'../units/' + unit.id">
              <b-card>
                <b-card-text>{{ unit.unit_name }}</b-card-text>
              </b-card>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      course: {},
      // user_course: this.$state.auth.user.course,
      loading: false
    }
  },
  async created() {
    try {
      await this.$axios
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
.units {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
}
p.card-text {
  font-size: 20px;
}
.no-courses {
  font-size: 20px;
}
</style>