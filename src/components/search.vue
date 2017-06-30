<template>

      <div>
        <input type="text" placeholder="enter the name you search" v-model="inputSearchName"/>
        <button @click="searchName">Search</button>
      </div>

</template>

<script>
    export default{
        props :['setSearchName'],
      data(){
            return{
              inputSearchName:''
            }
      },
      methods :{
        searchName(){
            let inputSearchName = this.inputSearchName.trim()
            if(!inputSearchName){
                return
            }
            this.setSearchName(inputSearchName)
        }
      }
    }

</script>

<style>

</style>
