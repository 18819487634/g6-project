<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { mapGetters } from 'vuex'
export default defineComponent({
    // computed: {
    //     ...mapGetters('common', ['loadStatus'])
    // },
    setup () {
        const msg = '首页'
        onMounted(() => {
            console.log('onMounted')
            console.log(this.$store.state.loadStatus)
        })
        return {
            msg
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
