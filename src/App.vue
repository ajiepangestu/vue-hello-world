<template>
    <div>
        <button @click="decrement">-</button>
        {{ number }}
        <button @click="increment">+</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import useCounter from './helpers/counter'
export default {
    setup () {
        const state = reactive({
            number: 0
        })
        const { decrement, increment } = useCounter(state)
        return {
            ...toRefs(state), decrement, increment
        }
    }
}
</script>
