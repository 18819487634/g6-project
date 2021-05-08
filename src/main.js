import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import answer from '@/directive/answer'

const app = createApp(App)

// 全局处理error
app.config.errorHandler = (err, vm, info) => {
    console.log(err)
}

// app.directive('focus', {
//     mounted (el) {
//         el.focus()
//     }
// })

/**
 * 全局属性
 * 可以代替Vue2.x的Vue.prototype
 */
app.config.globalProperties.$api = {}

app.use(router).use(store).mount('#app')
