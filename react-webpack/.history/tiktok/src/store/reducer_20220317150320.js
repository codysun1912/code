import { SET_TODO_INPUT } from "./contants"


const initState  = {
     todos:[],
     todoInput:"",
}

function reducer(state,action){
    switch(action.type){
         case SET_TODO_INPUT:
             return {
                 ...state ,
                 todoInput:action.payload
             }
         case ADD_TODO_INPUT:
             return {
                 ...state,
                 todos:[...state , action.payload]
             }
             default:
                 throw new Error("Invalid action")
    }

    
}
export { initState}
export default reducer