import {useStore ,actions} from "./store"

function App(){
  const [state , dispatch] = useStore()
  const handleClickAdd = () =>{
    dispatch(actions.addTodoInput(state.todoInput))
  }
  return (
    <div>
    <input
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
