function logger(reducer){
    return(state , action) => {
        const newState = reducer(prevStater, action)
        return newState

    }
}