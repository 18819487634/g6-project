<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link>
    </div>
    <div>{{username}}</div>
    <div id="teleport-target"></div>
    <router-view/>
  </div>
</template>

<script>
import { defineComponent, provide } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    props: {
        username: {
            type: String,
            default: ''
        }
    },
    mounted () {
        // setTimeout(() => {
        //     history.pushState({}, '1111', 'qqq/www/eee')
        // }, 2000)
    },
    setup () {
        const store = useStore()
        // vue3 使用provide/inject依赖注入替换vue2的prototype继承
        provide('store', store)
        provide('test', 1111)
    }
})
</script>


<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
