function logger(reducer){
    return(prevState , action) => {
        console.group(action.type);
        console.log('Prev state :',prevState)
        console.log("Action :",action)
        const newState = reducer(prevState, action)

        return newState

    }
}
export default logger