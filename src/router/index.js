// eslint-disable-next-line prettier/prettier
import {
  createRouter,
  createWebHistory,
} from "vue-router";

import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Página Inicial",
    component: Index,
  },
  {
    path: "/wish-list",
    name: "Lista de Desejos",
    component: () => import("../views/WishList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
