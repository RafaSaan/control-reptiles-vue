import { createRouter, createWebHashHistory } from "vue-router";
import ControlRouter from "@/modules/controlReptiles/router";

const routes = [
  {
    path: "/control",
    ...ControlRouter,
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
