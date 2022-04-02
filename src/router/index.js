import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Pedido from "../views/Pedido.vue";
import Pasteles from "../views/Pasteles.vue";
import Decoracion from "../views/Decoracion.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Pasteles",
    name: "Pasteles",
    component: Pasteles,
  },
  {
    path: "/Pedido",
    name: "Pedido",
    component: Pedido,
  },
  {
    path: "/Decoracion",
    name: "Decoracion",
    component: Decoracion,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
