<template>
    <div>
        {{ msg }}
        {{ test }}
    </div>
</template>

<script>
import { defineComponent, inject } from 'vue'
export default defineComponent({
    setup () {
        const msg = '首页'
        const store = inject('store') // provide/inject依赖注入
        const test = inject('test')
        console.log(store.commit('setLoadStatus', true)) // 设置为true
        console.log(store.getters.getLoadStatus) // true
        console.log(test)

        return {
            msg
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
