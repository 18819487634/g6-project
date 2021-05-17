class MyConsole {
    // 在Vue.use(myConsole)调用时，会将window.console对象替换（因为我们调用的console.log的console对象，是挂载在window对象上的。）。
    // 替换之后，每次console.log就调用我们自己编写的myCosnole对象的log方法了。
    install (_Vue) {
        this.console = window.console
        window.console = this
    }

    // 使用eslint的展开运算符获取所有参数，然后传递到系统的console.log方法中。
    // 如果是es5，则使用 arguments 获取所有参数，使用 apply 传递给系统的console.log方法中。
    log (...params) {
        if (process.env.VUE_APP_BASE_ENV !== 'dev') return
        this.console.log(...params)
    }

    info (...params) {
        if (process.env.VUE_APP_BASE_ENV !== 'dev') return
        this.console.info(...params)
    }

    error (...params) {
        if (process.env.VUE_APP_BASE_ENV !== 'dev') return
        this.console.error(...params)
    }

    warn (...params) {
        if (process.env.VUE_APP_BASE_ENV !== 'dev') return
        this.console.warn(...params)
    }
}

export default new MyConsole()
