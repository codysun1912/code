import {useStore} from "./store"

function App(){
  const [state , dispatch] = useStore()

  return (
    <div>
    <input
    value={state.todoInput}>

    </input>


    </div>
  )
}
export default App
