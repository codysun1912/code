function logger(reducer){
    return(prevStater , action) => {
        const newState = reducer(prevStater, action)
        return newState

    }
}