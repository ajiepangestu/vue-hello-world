<template>
<div>
  {{ number }}
</div>
</template>

<script>
import { ref } from 'vue'
export default {
    // Options API
    // data () {
    //     return {
    //         number: 0
    //     }
    // },
    // mounted () {
    //     setInterval(() => {
    //         this.number++
    //     }, 1000)
    // }

    // Composition API
    setup () {
        const number = ref(0)
        setInterval(() => {
            number.value++
        }, 1000)
        return {
            number
        }
    }
}
</script>
