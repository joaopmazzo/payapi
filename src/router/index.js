import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/HomeView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/home/PricingView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/home/AboutView.vue"),
    },
  ],
});

export default router;
