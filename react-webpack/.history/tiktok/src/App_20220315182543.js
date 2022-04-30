import {useState} from "react";




function App() {
  const [count , setCount] =useState(60)
    
 
  return (
    <div className="App">
    <button>Start</button>
    <button>Stop</button>
    
    </div>
  )
}

export default App;
