import {useState , useReducer} from "react";


function App() {
  const [count , setCount] = useState()
  co
  
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick = {handleClickUp}>
      Down
    </button>
    <button onClick = {handleClickDown}>
      Up
    </button>

    
    </div>
  )
}

export default App;
