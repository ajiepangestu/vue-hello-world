<template>
    <div>
        <div>{{ number }}</div>
        <div>
            {{ form.title }}
            {{ form.body }}
        </div>
        <div>
            <div>{{ state.user.name }}</div>
            <div>{{ state.user.email }}</div>
        </div>
        <div>
            <div>{{ state.post.title}}</div>
            <div>{{ state.post.body }}</div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
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
        // different reactive and ref
        // ref declaration, ref used for primitive data (boolean, int, string)
        const number = ref(0)
        // reactive declaration, reactive used for complex data(array, object)
        const form = reactive({
            title: 'First Title',
            body: 'The First Body'
        })
        // the usual way to use reactive
        const state = reactive({
            // cannot use primitive data in there because with DESTRUCTURING object can make removed reactivity
            // so must use ref
            // loading: false
            user: {
                name: 'Ajie Pangestu',
                email: 'paangestu@gmail.com'
            },
            post: {
                title: 'First Post',
                body: 'First Body'
            }
        })
        // the usual way to use ref
        const loading = ref(false)
        setInterval(() => {
            // ref, must use '.value' for change value of variable
            number.value++
            loading.value = true
            // reactive
            form.title = 'Second Title'
            state.user.name = 'Ajie'
            state.post.title = 'Second Title'
        }, 1000)

        // if use state reactive
        // return {
        //     state
        // }

        return {
            // Destructuring object reactive can remove reactivity of object
            number, form, ...state
        }
    }
}
</script>
