<template>
    <div>{{ signA }}</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    mounted () {
        console.log('组件A')
        console.log(this.$attrs)
    },
    setup () {
        const signA = '组件A'
        return {
            signA
        }
    }
})
</script>

<style>
</style>
