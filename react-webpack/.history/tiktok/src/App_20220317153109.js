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
    {state.todos.map((todo,index) => (
      <li key ={index}>{todo}</li>
    ))}
    <button >Delete</button>
    </div>
   
  )
}
export default App
