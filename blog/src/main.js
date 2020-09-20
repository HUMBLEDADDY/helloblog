import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import Article from "./components/Article";
import Category from "./components/Category";
import "./assets/iconfont/iconfont.css";

Vue.component("Article", Article);
Vue.component("Category", Category);

Vue.config.productionTip = false;
import "./style.scss";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
