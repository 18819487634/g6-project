import { createStore } from 'vuex'

export default createStore({
    namespaced: true,
    state: {
        loadStatus: false
    },
    mutations: {
        setLoadStatus (state, loadStatus) {
            state.loadStatus = loadStatus
        }
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getLoadStatus (state) {
            return state.loadStatus
        }
    }
})
