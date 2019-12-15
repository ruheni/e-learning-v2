<template>
  <div class="form">
    <h2>Upload Course Media</h2>
    <b-form @submit="fileUpload" @reset="resetForm">
      <!-- course selection -->
      <b-form-group id="course" label="Course Name:" label-for="course">
        <b-form-input id="course" v-model="course" required placeholder="Course name here..."></b-form-input>
      </b-form-group>
      <!-- unit name -->
      <b-form-group id="unit" label="Unit Name:" label-for="unit">
        <b-form-input id="unit" v-model="unit" required placeholder="Unit name here..."></b-form-input>
      </b-form-group>
      <!-- file upload form -->
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>

      <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      course: '',
      unit: ''
    }
  },
  methods: {
    fileUpload(evt) {
      evt.preventDefault()
      //   form upload
      const res = this.$axios
        .$post('http://localhost:1337/units', {
          file: this.file,
          course: this.course,
          unit: this.unit
        })
        .then(res => alert('Upload successful'))
        .catch(error => alert(error || 'An error occured'))
    },
    resetForm(evt) {
      evt.preventDefault()
      this.file = null
      this.course = ''
      this.unit = ''
    }
  }
}
</script>
<style scoped>
.form {
  max-width: 700px;
  margin: 50px auto;
}
</style>