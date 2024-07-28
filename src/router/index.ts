import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../layout/AppLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
