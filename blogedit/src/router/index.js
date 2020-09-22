import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Article from "../views/Article.vue";
import Articleedit from "../views/Articleedit.vue";
import Console from "../views/Console.vue";
import Category from "../views/Category.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { isPublic: true },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "/Category/create", component: Category },
      {
        path: "/Category/:id",
        component: Category,
        props: true,
      },

      { path: "/", component: Console },
      { path: "/Articleedit", component: Articleedit },
      {
        path: "/Articleedit/:blogId",
        component: Articleedit,
        props: true,
      },
      { path: "/Article", component: Article },
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
