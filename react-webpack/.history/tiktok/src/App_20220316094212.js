import {useState , useMemo, useRef} from "react";


function App() {
  const [count , setCount] = useState()
  
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick = {handleClickUp}>
      Up
    </button>
    
    </div>
  )
}

export default App;
