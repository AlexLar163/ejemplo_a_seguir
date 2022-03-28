import Vue from "vue";
import Router from "vue-router";
import EcHome from "@/views/EcHome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{ path: "/", name: "home", component: EcHome }],
});
