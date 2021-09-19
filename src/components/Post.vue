<template>
    <div>
        <div v-if="loading" class="text-center">Loading....</div>
        <div v-else>
            <ul>
                <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useFetcher from '../helpers/fetcher'
export default {
    name: 'Post',
    setup () {
        const posts = ref([])
        const loading = ref(false)
        const { getPosts } = useFetcher(posts, loading)
        onMounted(() => {
            getPosts()
        })
        return {
            posts, loading
        }
    }
}
</script>
