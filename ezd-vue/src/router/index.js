import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/Home.vue'
import AboutPage from '@/components/About.vue'
import BecomeIdol from '@/components/BecomeIdol.vue'
import GameIndex from '@/components/miniGame/index.vue'


const routes = [
    {
        path: '/',
        component: HomePage
    },

    {
        path: '/about',
        component: AboutPage
    },
   
    {
        path: '/become',
        component: BecomeIdol
    },
    {
        path:'/game',
        component:GameIndex

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
