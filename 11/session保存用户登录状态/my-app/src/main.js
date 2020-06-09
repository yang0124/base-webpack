import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 完整引入
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);

// 按需引入
// import Rate from 'ant-design-vue/lib/rate';
// import Switch from 'ant-design-vue/lib/switch';
// import 'ant-design-vue/lib/rate/style/css';
// import 'ant-design-vue/lib/switch/style/css';
// Vue.use(Rate).use(Switch);

import { Layout, Icon, Menu, Button } from "ant-design-vue";
Vue.use(Layout)
  .use(Icon)
  .use(Menu)
  .use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
