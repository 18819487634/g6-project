import Vuex from 'vuex'
import common from './modules/common'

// 开发环境使用严格模式（严格模式下，不允许外部修改store状态）
const strict = (process.env.VUE_APP_BASE_ENV !== 'prod')

export default new Vuex.Store({
    modules: {
        common
    },
    strict
})

// export default Vuex.createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
