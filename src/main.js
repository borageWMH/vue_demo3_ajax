import Vue from 'vue'
import App from './components/app.vue'
import VueResource from 'vue-resource'


// 使用插件
Vue.use(VueResource)

// 创建Vue实例对象
/*

new Vue({
  el: '#test',
  components: {
    App
  },
  template: '<App/>'
})
*/

new Vue({
  el: '#test',
  render: h => h(App)
  /*render: function (createElement) {
    // createElement是一个用来根据组件创建对应的标签的函数
    return createElement(App)
  }*/
})
