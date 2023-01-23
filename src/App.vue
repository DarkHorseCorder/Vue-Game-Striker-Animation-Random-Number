<template>
  <div class="row d-flex  justify-content-center">
    <div class="col-md-4 col-lg-3 col-sm-6align-items-end flex-column" id="main">
      <Header/>
      <!-- Router view -->
      <div class="">
        <router-view></router-view>
      </div>
      <div class="mb-auto">
        <Footer/>
    </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
        data() {
            return {
            }
        },
        components : {
          Header,
          Footer
        }
    }
</script>

<style>
#main{
  background-color: black;
  margin : 0;
  padding : 0;
  width: 400px;;
  /* height: 100vh; */
}
</style>
