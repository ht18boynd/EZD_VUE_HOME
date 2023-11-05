import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/Home.vue";
import AboutPage from "@/components/About.vue";
import BecomeIdol from "@/components/BecomeIdol.vue";
import GameIndex from "@/components/miniGame/index.vue";
import LoginPage from "@/components/auth/Login.vue";
import RegisterPage from "@/components/auth/Register.vue";
import CoinPage from "@/components/BuyCoin.vue";
import test from "@/components/test.vue"

import LuckySpin from "@/components/person/LuckySpin.vue"

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/test",
    component: test,
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
    path: "/coin",
    component: CoinPage,
  },
 
  {
    path: "/person/lucky",
    component: LuckySpin,
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
