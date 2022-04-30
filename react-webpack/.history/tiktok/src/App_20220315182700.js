import {useState} from "react";




function App() {
  const [count , setCount] =useState(60)

  const handleClickStart = () =>{

  }
  const handleClickStop = () =>{
    
  }
    
 
  return (
    <div className="App">
    <button onClick ={handleClickStart}>Start</button>
    <button onClick={handleClickStop}>Stop</button>
    </div>
  )
}

export default App;
