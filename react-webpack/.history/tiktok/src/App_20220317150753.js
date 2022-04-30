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


    </div>
  )
}
export default App
