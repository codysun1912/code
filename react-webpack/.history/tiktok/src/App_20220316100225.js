import {useState , useReducer} from "react";

const initState = 0

const DOWN_ACTION = "down"
const UP_ACTION = "up"

const reducer = (state , action) => {
  switch (action) {
    case UP_ACTION: 
    return state + 1
    case DOWN_ACTION:
      return state - 1
      default:
        throw new Error("Invalid action")

  }
}


function App() {
  const [count , setCount] = useState(0)
  
  
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick = {() => setCount(count - 1)}>
      Down
    </button>
    <button onClick = {() => setCount(count + 1)}>
      Up
    </button>

    
    </div>
  )
}

export default App;
