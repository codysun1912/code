import {useState ,useRef , useEffect} from "react";




function App() {
  const [count , setCount] =useState(60)
  let timer = useRef()

  const handleClickStart = () =>{
    timer.current = setInterval(() =>{
      setCount(prev => prev -1)
    } , 1000)

  }
  const handleClickStop = () =>{
    clearInterval(timer.current)
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
