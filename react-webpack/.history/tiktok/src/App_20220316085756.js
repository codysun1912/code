import {useState,useCallback} from "react";
import Content from "./content";

function App() {
  const [name, setName] = useState()
  const [price ,setPrice]=useState()
  const handleClick = () =>{

  }
  
  
  return (
    <div className="App">
    <input 
    value={name}
    placeholder="Enter your name">
    onChange={(e)=> setName(e.target.value)}
    

    </input>
    <input 
    value={price}
    placeholder="Enter your name">
    onChange={(e)=> setPrice(e.target.value)}
    

    </input>
    <button onClick={handleClick}>Click</button>

    
    </div>
  )
}

export default App;
