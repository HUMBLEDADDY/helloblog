import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import Article from "./components/Article";
import "./style.scss";

Vue.config.productionTip = false;
Vue.component("Article", Article);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
