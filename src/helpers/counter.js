export default function useCounter (state) {
    const increment = () => {
        state.number++
    }
    const decrement = () => {
        state.number--
    }
    return {
        decrement, increment
    }
}
