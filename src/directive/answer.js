const answer = {
    mounted (el, binding, vNode) {
        const { value, modifiers } = binding
        if (!value) return
        try {
            el.innerHTML = value
        } catch (err) {
            console.log(err)
        }
    }
}

export default answer
