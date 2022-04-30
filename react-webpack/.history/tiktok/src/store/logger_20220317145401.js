

function logger(reducer){
    return (prevState , action ) => {
        console.group(action.type)
        console.log("prevState" ,prevState)
        const newState = reducer(prevState, action);

        return newState
    }
}