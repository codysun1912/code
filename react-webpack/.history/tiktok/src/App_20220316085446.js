import {useState,useCallback} from "react";
import Content from "./content";

function App() {
  const [name, setName] = useState()
  
  
  return (
    <div className="App">
    <input 
    value={name}
    placeholder="Enter your name">
    onChange={(e)=> setName(e.target.value)}

    </input>
    
    </div>
  )
}

export default App;
