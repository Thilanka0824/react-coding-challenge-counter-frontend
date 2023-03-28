function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            let newCountIncrement = state.count
            if(state.count < 10){
                newCountIncrement = state.count + 1
            }
            return {
                ...state,
                // count: state.count +1,
                count: newCountIncrement,
            }
        case "DECREMENT":
            let newCountDecrement = state.count
            if(state.count > 0){
                newCountDecrement = state.count - 1
            }
            return {
                ...state,
                // count: state.count -1,
                count: newCountDecrement,
            }
        default:
            throw Error("Unknown Action")
    }
}

export default reducer