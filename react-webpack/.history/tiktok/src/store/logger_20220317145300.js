

function logger(reducer){
    return (prevState , action ) => {
        const newState = reducer(prevState, action);
    }
}