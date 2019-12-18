<template>
  <!-- Where the html is -->
  <div class="page">
    <div class="text-center" v-if="loading">
      <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    </div>

    <nuxt-link to="/courses">&larr; Go to courses page</nuxt-link>

    <!-- display courses when loading is done -->
    <h2 class="title">{{ unit.unit_name}}</h2>
    <p class="description">{{ unit.unit_description }}</p>
    <p v-if="unit.unit_materials <= 0">
      There are no materials in this course
      <br />
      <nuxt-link to="../courses">Go back to Courses page</nuxt-link>
    </p>
    <div class="docs">
      <h4>The following materials are available for this unit:</h4>
      <!-- loop through unit materials object -->
      <div v-for="material in unit.unit_materials" :key="material.id">
        <!-- loop through document in unit materials object -->
        <ul v-for="doc in material.unit_materials" :key="doc.id">
          <!-- open document in new page on click -->
          <div>
            <a
              :href="'http://localhost:1337' + doc.url"
              :download="doc.name"
              target="_blank"
            >{{ doc.name }}</a>
            <p v-if="doc.unit_doc_description">{{ material.unit_doc_description}}</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// Where the javascript lives
export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      unit: {},
      loading: false
    }
  },
  async created() {
    try {
      this.loading = true
      const res = await this.$axios
        .$get(`http://localhost:1337/units/${this.$route.params.id}`)
        .then(res => {
          this.loading = false
          this.unit = res
        })
    } catch (error) {
      alert(error || 'An error occured')
    }
  }
}
</script>
<style scoped>
/* Where the styles live */
.page {
  padding: 50px;
}
</style>