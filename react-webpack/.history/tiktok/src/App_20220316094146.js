import {useState , useMemo, useRef} from "react";


function App() {
  
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
