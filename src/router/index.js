import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Portflio-Rémi.P",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../components/ProjectsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/ContactView.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../components/SkillsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;
