import {useStore ,actions} from "./store"
import {useRef} from "react"

function App(){
  const [state , dispatch] = useStore()
  const inputRef = useRef()
  const handleClickAdd = () =>{
    dispatch(actions.addTodoInput(state.todoInput))
    dispatch(actions.setTodoInput(""))

  }
  return (
    <div>
    <input
    ref={inputRef}
    value={state.todoInput}
    placeholder="Enter todo"
    onChange={e => {dispatch(actions.setTodoInput(e.target.value))}}
    >

    </input>
    <button onClick = {handleClickAdd}>ADD</button>
    <ul>
    {state.todos.map((todo,index) => (
      <li key ={index}>{todo}
      <button style={{marginLeft:20}} onClick = {() => dispatch(actions.deleteTodoInput(index))} >Delete</button>
      </li>
    ))}
    </ul>
    </div>
   
  )
}
export default App
