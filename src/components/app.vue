<template>
 <div>
   <div class="container">
     <section class="jumbotron">
       <h3 class="jumbotron-heading">Search Github Users</h3>
        <search></search>
     </section>
      <test-main></test-main>
   </div>
 </div>
</template>

<script>
  import search from "./search.vue"
  import main from './main.vue'

  export default{
      data () {
         return{

         }
      },
      components : {
          search,
          'test-main' : main
      },
    methods :{

    }
  }
</script>

<style>



</style>
