import {useStore ,actions} from "./store"

function App(){
  const [state , dispatch] = useStore()

  return (
    <div>
    <input
    value={state.todoInput}
    placeholder="Enter todo"
    onChange={e => {dispatch}}
    >

    </input>


    </div>
  )
}
export default App
