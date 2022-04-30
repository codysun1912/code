function logger(reducer){
    return(prevStater , action) => {
        console.group(action.type);
        console.log()
        const newState = reducer(prevStater, action)

        return newState

    }
}
export default logger