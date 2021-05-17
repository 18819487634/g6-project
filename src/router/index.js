import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import baseRouter from './modules/baseRouter'
import mainRouter from './modules/mainRouter'

const routes = [
    ...baseRouter,
    ...mainRouter
]

const router = createRouter({
    // history: createWebHashHistory(), //  hash
    history: createWebHistory(), //  history
    routes
})

export default router
