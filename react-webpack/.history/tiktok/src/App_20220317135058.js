import {useContext} from "react"
import {StoreContext} from "./store"
function App(){
  const [state , dispatch] = useContext(StoreContext)
  return (
    <div>
    <h1>Hello</h1>

    </div>
  )
}
export default App
