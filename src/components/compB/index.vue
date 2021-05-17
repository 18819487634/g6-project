<template>
    <div>
        <compA :pToB="$attrs" @bToAMethod="btoamethod" :bToA="'qqq'" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import compA from '../compA'

export default defineComponent({
    props: {
        name: {
            type: String,
            default: 'evan'
        }
    },
    components: {
        compA
    },
    mounted () {
        console.log('组件B')
        console.log(this.$attrs)
    },
    setup (props) {
        console.log(props.name)
        const sign = '组件B'
        const btoamethod = () => {
            console.log(111)
        }
        return {
            sign,
            btoamethod
        }
    }
})
</script>

<style>
</style>
