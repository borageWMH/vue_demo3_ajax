<template>
 <div>
   <div class="container">
     <section class="jumbotron">
       <h3 class="jumbotron-heading">Search Github Users</h3>
        <search   :set-search-name="setSearchName"></search>
     </section>
      <test-main :search-name="searchName"></test-main>
   </div>
 </div>
</template>

<script>
  import search from "./search.vue"
  import main from './main.vue'

  export default{
      data () {
         return{
            searchName : ''
         }
      },
      components : {
          search,
          'test-main' : main
      },
    // 因为main.vue 和 search.vue 是兄弟关系，所以不能通过标签属性直接传递数据，
    // 只能先让search 传递给父组件App 然后app 再传递给子组件main

    methods :{
     // 定义一个方法来接受数据
      setSearchName(searchName){
          this.searchName = searchName
      }
    }
  }
</script>

<style>



</style>
