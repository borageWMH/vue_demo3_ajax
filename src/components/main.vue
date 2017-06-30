<template>
    <div>
      {{searchName}}
      <h2 v-show="firstView">Enter search your name</h2>
      <h2 v-show="loading">loading</h2>
      <h2 v-show="errorMsg">{{errorMsg}}</h2>
      <div class="row">
       <!-- <div class="card">
          <a :href="user.html_url" target="_blank">
            <img src="user.avatar_url" style='width: 100px'/>
          </a>
          <p class="card-text">{{user.login}}</p>
        </div>-->
      </div>
    </div>
</template>

<script>
    export default{
        props:['searchName'],
      data(){
            return{
              firstView : true,
              loading :  false,
              users : null,
              errorMsg : null
            }
      }
    }

</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
