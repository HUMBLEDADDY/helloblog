import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import Article from "./components/Article";
import "./style.scss";
import http from "./http";
import vuescroll from "vuescroll";
import "vuescroll/dist/vuescroll.css";

// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: "myScroll", // 在这里自定义组件名字，默认是vueScroll
});
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: "#ecdec3",
    keepShow: true,
  },
};
Vue.prototype.$http = http;

Vue.config.productionTip = false;
Vue.component("Article", Article);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
