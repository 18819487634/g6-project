<template>
  <div>{{ count }} {{ object.foo }}</div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    setup () {
        const count = ref(0)
        const object = reactive({ foo: 'bar' })

        // 暴露到template中
        return {
            count,
            object
        }
    }
}
</script>
