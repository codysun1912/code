import {useState} from "react";




function App() {
  const [count , setCount] =useState(60)

  const handleClickStart = () =>{
    setInterval(() =>{
      setCount(prev => prev -1)
    })

  }
  const handleClickStop = () =>{
    
  }
    
 
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick ={handleClickStart}>Start</button>
    <button onClick={handleClickStop}>Stop</button>
    </div>
  )
}

export default App;
