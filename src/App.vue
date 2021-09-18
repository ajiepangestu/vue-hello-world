<template>
    <div>
        <div>Loading: {{ loading }}</div>
        <div>My Name is {{ user.name }}</div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup () {
        const state = reactive({
            loading: false,
            user: {
                name: 'Ajie Pangestu'
            }
        })
        setTimeout(() => {
            state.loading = true
            state.user.name = 'Ajie'
        }, 2000)
        return {
            ...toRefs(state)
        }
    }
}
</script>
