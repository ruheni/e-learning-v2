<template>
  <div>
      <!-- <div class="container">
      <div class="links">
        <h1></h1>
        <nuxt-link to="/courses">Go to courses page</nuxt-link>
      </div>
    </div> -->

    <!-- All elements enclosed -->
    <div class="container">
      <!-- background image -->
      <div class="background">
        <div class="content">
          <h1 class="title">Riara University</h1>
          <p class="sub-title">E-learning platform</p>
        </div>
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
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

  .container {
        position: absolute;
    
        /* top: 0; */
        /* width: 100%; */
        height: 100%;
        padding-left: 0;
      }
      .background{
        /* position: relative; */
        height: 100%;
        width: 100vw;
            left: 0;
        background: linear-gradient(rgba(5, 13, 48, 0.25),rgba(5, 13, 48, 0.25)), url("../assets/online-4668930_1920.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        /* background-position: center center; */
      }
      .content {
        
        position: absolute;
        bottom: 0;
        /* background-color: rgb(200, 200, 224); */
        background-color: rgb(180, 180, 184);
        color: blue !important;
        height: 25%;
        width:100vw;
        text-align:center;
        opacity: 0.9;
      }
      .title{
          font-size: 4em;
      }
      .sub-title{
          /* margin-top: -2rem;  */
          font-size: 1.5rem;
      }
</style>
