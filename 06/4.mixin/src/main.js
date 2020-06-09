import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局混入
Vue.mixin({
  created(){
    console.log('vue created.......');
  }
});


new Vue({
  render: h => h(App),
}).$mount('#app')
