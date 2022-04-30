import {useState ,useRef , useEffect} from "react";



function App() {
  const [count , setCount] = useState(60)
  const handleClickCount = () => {
    setInterval(() => {
      setCount(prevCount => prevCount -1)
    },1000)
  }
  
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick ={handleClickCount}>Click</button>
    
    </div>
  )
}

export default App;
