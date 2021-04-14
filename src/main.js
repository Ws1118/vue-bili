import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
// import '../theme/index.css'
import "element-ui/lib/theme-chalk/index.css";
import './index.css'
import "vant/lib/index.css"
import { Icon } from 'vant'

Vue.config.productionTip = false;
Vue.use(ElementUI).use(Icon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
