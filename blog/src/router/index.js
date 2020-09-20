import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Thehome from "../views/Thehome.vue";
import Category from "../views/Category.vue";
import Article from "../views/Article";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "/", name: "thehome", component: Thehome },
      { path: "/category", name: "category", component: Category },
      { path: "/Article", name: "Article", component: Article },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
