import { computed, ref } from 'vue'

export default function () {
    const count = ref(1)
    const double = computed(() => count.value * 2)
    function increment () {
        count.value++
    }
    function hello () {
        console.log('hello mixin')
    }
    return {
        count,
        double,
        increment,
        hello
    }
}
