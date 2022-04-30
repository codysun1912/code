import {useStore} from "./store"

function App(){
  const [state , dispatch] = useStore()

  return (
    <div>
    <input
    value={state.todoInput}
    placeholder="Enter todo"
    >

    </input>


    </div>
  )
}
export default App
