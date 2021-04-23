const mainRouter = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '每天成长亿点点'
        }
    }
]

export default mainRouter
