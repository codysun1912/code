import {useState} from "react";




function App() {
  const [count , setCount] =useState(60)
    
 
  return (
    <div className="App">
    <button onClick ={handleClickStart}>Start</button>
    <button onClick={handleClickStop}>Stop</button>
    
    </div>
  )
}

export default App;
