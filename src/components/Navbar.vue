<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Vue Hello World</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/" exact-active-class="active text-white">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about" exact-active-class="active text-white">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/blog" exact-active-class="active text-white">Blog</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
