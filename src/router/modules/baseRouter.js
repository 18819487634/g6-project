const baseRouter = [
    {
        path: '/404',
        component: () => import('@/views/404'),
        meta: {
            title: '资源未找到'
        }
    }
]

export default baseRouter
