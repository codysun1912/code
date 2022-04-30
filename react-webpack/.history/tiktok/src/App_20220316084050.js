import {useState,useCallback} from "react";
import Content from "./content";

function App() {
  const [count , setCount] = useState(0)
  const handleClickCount = useCallback( () => {
    
    setCount(count + 1)
  
  }
  )
  
  return (
    <div className="App">
    <Content onClickCount = {handleClickCount}/>
    <h1>{count}</h1>
   
    
    </div>
  )
}

export default App;
