<template>
    <div>
      <h2 v-show="firstView">Enter search your name</h2>
      <h2 v-show="loading">loading....</h2>
      <h2 v-show="errorMsg">{{errorMsg}}</h2>
      <div class="row" v-show="users">
        <div class="card" v-for="user in users">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
          </a>
          <p class="card-text">{{user.login}}</p>
        </div>
      </div>
    </div>
</template>

<script>

  import axios  from 'axios'
    export default{
        props:['searchName'],
      data(){
            return{
              firstView : true,
              loading :  false,
              users : null,
              errorMsg : null
            }
      },
      // 用 update:{} 可以监视的searchname 的变化，但是 不能具体的监视到是哪一个属性发生了变化
      watch :{
        searchName(newValue,oldValue){   // searchName 发生了变化
            // 发生变化之后更新状态
           this.firstView = false
            this.loading = true
            this.users = null
            this.errorMsg = null
            // 发送请求
            const url = `https://api.github.com/search/users?q=${this.searchName}`
            axios.get(url)
              .then(response =>{
                // 获得请求成功的数据，然后更新状态
                this.loading = false;
                this.users = response.data.items.map(item =>{
                        return {
                          html_url: item.html_url,
                          avatar_url: item.avatar_url,
                          login: item.login
                        }
                 })
              })
              .catch(error =>{
                this.loading = false;
                 this.errorMsg = '发送请求失败'
                  //console.error(error);
              })
        }
      }
     /* watch: {
        searchName (newValue, oldValue) {// searchName发生了变化
          // 更新请求中的状态
          this.firstView = false
          this.loading = true
          this.errorMsg = null
          this.users = null
          //发ajax请求
          const url = `https://api.github.com/search/users?q=${this.searchName}`
          axios.get(url)
            .then(response => {
              const result = response.data
              // 更新为请求成功的状态
              this.loading = false
              this.users = result.items.map(item => {
                return {
                  html_url: item.html_url,
                  avatar_url: item.avatar_url,
                  login: item.login
                }
              })
            })
            .catch(error => {
              // 更新为请求失败的状态
              this.loading = false
              this.errorMsg = '发送请求失败了'
            })
        }
      }*/
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
