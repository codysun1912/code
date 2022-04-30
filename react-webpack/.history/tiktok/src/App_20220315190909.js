import {useState } from "react";
import Content from "./content";

function App() {
  const [count , setCount] = useState(0)
  const handleClickCount = () => {
    setInterval(() => {
      setCount(prevCount => prevCount -1)
    },1000)
  }
  
  return (
    <div className="App">
    <Content/>
    <h1>{count}</h1>
    <button onClick ={handleClickCount}>Click</button>
    
    </div>
  )
}

export default App;
