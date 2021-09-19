<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 mt-4">
                <div class="card">
                    <div class="card-body">
                        <Post />
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
import Post from '../components/Post.vue'
export default {
    name: 'Blog',
    components: {
        Post
    }
}
</script>
