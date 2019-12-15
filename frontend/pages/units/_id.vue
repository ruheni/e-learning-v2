<template>
  <div class="course">
    <h2>{{ unit.unit_name}}</h2>
    <p v-if="unit.unit_materials <= 0">
      There are no materials in this course
      <br />
      <nuxt-link to="../courses">Go back to Courses page</nuxt-link>
    </p>
    <!-- loop through unit materials object -->
    <div v-for="material in unit.unit_materials" :key="material.id">
      <!-- loop through document in unit materials object -->
      <ul v-for="doc in material.unit_materials" :key="doc.id">
        <!-- open document in new page -->
        <a
          :href="'http://localhost:1337' + doc.url"
          :download="doc.name"
          target="_blank"
        >{{ doc.name }}</a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      unit: {}
    }
  },
  async created() {
    try {
      const res = await this.$axios
        .$get(`http://localhost:1337/units/${this.$route.params.id}`)
        .then(res => (this.unit = res))
    } catch (error) {
      alert(error || 'An error occured')
    }
  }
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