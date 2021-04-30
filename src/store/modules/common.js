import { createStore } from 'vuex'

const common = {
    state: () => ({
        loadStatus: false
    }),
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
        // loadStatus: state => state.loadStatus
        getLoadStatus: state => state.loadStatus
    }
}

export default common
