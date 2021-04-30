<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
import { defineComponent, onMounted, inject } from 'vue'
export default defineComponent({
    setup () {
        const msg = '首页'
        const store = inject('store')
        const test = inject('test')
        console.log(store.commit('setLoadStatus', true))
        console.log(store.getters.getLoadStatus)
        console.log(test)
        onMounted(() => {
            console.log('onMounted')
        })
        return {
            msg
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
