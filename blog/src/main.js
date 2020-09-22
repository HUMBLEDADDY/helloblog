import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import Article from "./components/Article";
import Date from "./components/Date";
import Category from "./components/Category";
import "./assets/iconfont/iconfont.css";
import http from "./http";
import Global from "@/components/Global";

Vue.prototype.$Global = Global; // 挂载到 Vue 实例上

Vue.prototype.$http = http;
Vue.component("Article", Article);
Vue.component("Category", Category);
Vue.component("Date", Date);

Vue.config.productionTip = false;
import "./style.scss";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
