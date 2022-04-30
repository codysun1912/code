import { SET_TODO_INPUT ,ADD_TODO_INPUT} from "./contants"


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
                 todos:[...state.todos , action.payload]
             }
             case DELETE_TODO_INPUT:
                     const newTodo = [...state.todos]
                     newTodo.splice(action.payload , 1)
                     return{

                     }
              
             default:
                 throw new Error("Invalid action")
    }

    
}
export { initState}
export default reducer