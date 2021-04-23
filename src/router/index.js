import { createRouter, createWebHistory } from 'vue-router'
import baseRouter from './modules/baseRouter'
import mainRouter from './modules/mainRouter'

const routes = [
    ...baseRouter,
    ...mainRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
