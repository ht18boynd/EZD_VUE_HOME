import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/Home.vue";
import AboutPage from "@/components/About.vue";
import BecomeIdol from "@/components/BecomeIdol.vue";
import GameIndex from "@/components/miniGame/index.vue";
import liveYouTube from "@/components/youtube/musicLive.vue";
import LoginPage from "@/components/auth/Login.vue";
import RegisterPage from "@/components/auth/Register.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/live",
    component: liveYouTube,
  },

  {
    path: "/about",
    component: AboutPage,
  },

  {
    path: "/become",
    component: BecomeIdol,
  },
  {
    path: "/game",
    component: GameIndex,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
