import axios from 'axios'
export default function useFetcher (data, loading) {
    const getPosts = async () => {
        loading.value = true
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            data.value = response.data
            loading.value = false
        } catch (e) {
            console.log(e.message)
            loading.value = false
        }
    }
    return {
        getPosts
    }
}
