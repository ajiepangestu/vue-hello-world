<template>
    <div>
        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
            >
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
export default {
    setup () {
        const posts = ref([])
        const getPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts.value = response.data
        }
        onMounted(() => {
            getPosts()
        })
        return {
            posts
        }
    }
}
</script>
