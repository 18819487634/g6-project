<template>
    <div>
        {{ msg }}
        <div id="teleport-target"></div>

        <teleport to="#teleport-target">
            <div v-if="visible">
                <div>teleport调用成功</div>
            </div>
        </teleport>
        <button @click="handleTeleport">点击显示teleport</button>
        <!-- <button>点击传送</button> -->
        <div v-answer.value="'指令参数'"></div>
         <!-- v-focus -->
        <input type="text">
        <div>{{count}}</div>
        <button @click="increment">点击+1</button>
        <button @click="myFn">sayHello</button>
        <compB :name="'fei'" :age="20" :sex="'nan'" />
        <div v-cloak>{{ message }}</div>

        <div>{{ objCopy.count }}</div>
        <button @click="handleObj">点击修改上面的值</button>
        =====================================================
        <div>foo:  {{ foo }}</div>
        <div>bar: {{ bar }}</div>
        <button @click="plusQqq">增加qqq</button>
    </div>
</template>

<script>

import { defineComponent, inject, ref, resolveDirective, reactive, isReactive, readonly, computed, watchEffect, watch } from 'vue'
import mixin from '@/components/mixins/mixin'
import compB from '@/components/compB'
export default defineComponent({
    props: {
        homeName: {
            type: String,
            default: '111'
        }
    },
    components: {
        compB
    },
    directives: {
        focus: {
            mounted (el) {
                el.focus()
            }
        }
    },
    setup (props, context) {
        console.log(context)
        console.log(props.homeName)
        const message = '编译结束展示'
        const answer = resolveDirective('answer')
        function myFn () {
            hello()
        }

        const obj = reactive({ count: 1 })
        const objCopy = readonly(obj)
        const handleObj = () => {
            objCopy.count++
        }

        console.log(isReactive(obj))

        const { count, double, increment, hello } = mixin()
        const msg = '首页'
        const store = inject('store') // provide/inject依赖注入
        const test = inject('test')
        console.log(store.commit('setLoadStatus', true)) // 设置为true
        console.log(store.getters.getLoadStatus) // true
        console.log(test)

        console.log(double.value)
        const visible = ref(false)

        let timer = null

        const handleTeleport = () => {
            visible.value = true
            clearTimeout(timer)
            timer = setTimeout(() => {
                visible.value = false
            }, 2000)
        }

        const qqq = ref(1)

        const doubleQqq = computed(() => qqq.value * 2)
        watch(qqq,
            (count, preCount) => {
                console.log('newVal:  ' + count)
                console.log('oldVal:  ' + preCount)
            })

        const plusQqq = () => {
            qqq.value++
            foo.value++
            bar.value--
        }

        const foo = ref(0)
        const bar = ref(100)
        watch([foo, bar], ([newFoo, newBar], [oldFoo, oldBar]) => {
            console.log('newFoo:   ' + newFoo)
            console.log('oldFoo:   ' + oldFoo)
            console.log('newBar:   ' + newBar)
            console.log('oldBar:   ' + oldBar)
        })

        return {
            msg,
            count,
            double,
            increment,
            hello,
            myFn,
            answer,
            message,
            visible,
            handleTeleport,
            objCopy,
            handleObj,
            qqq,
            doubleQqq,
            plusQqq,
            foo,
            bar
        }
    }
})
</script>

<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
</style>
