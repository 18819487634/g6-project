<template>
    <div>
        {{ msg }}
        {{ test }}
        <div v-answer.value="'测试'"></div>
        <input type="text" v-focus>
        <div>{{count}}</div>
        <button @click="increment">点击+1</button>
        <button @click="myFn">sayHello</button>
    </div>
</template>

<script>
import { defineComponent, inject } from 'vue'
import answer from '@/directive/answer'
import mixin from '@/components/mixins/mixin'
export default defineComponent({
    directives: {
        focus: {
            mounted (el) {
                el.focus()
            }
        },
        answer
    },
    setup () {
        function myFn () {
            hello()
        }

        const { count, double, increment, hello } = mixin()
        const msg = '首页'
        const store = inject('store') // provide/inject依赖注入
        const test = inject('test')
        console.log(store.commit('setLoadStatus', true)) // 设置为true
        console.log(store.getters.getLoadStatus) // true
        console.log(test)

        console.log(double.value)

        return {
            msg,
            count,
            double,
            increment,
            hello,
            myFn
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
