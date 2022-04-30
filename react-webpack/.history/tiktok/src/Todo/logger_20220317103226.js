function logger(reducer){
    return(prevStater , action) => {
        console.group(action.type);
        console.log('Prev state :',prevState)
        const newState = reducer(prevStater, action)

        return newState

    }
}
export default logger