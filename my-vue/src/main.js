//引入
import Vue from 'vue'
import App from './App'
import Header from './Header.vue'
import List from './List.vue'
//注册
Vue.component(Header.name,Header)
Vue.component(List.name,List)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
