import {useState,useCallback} from "react";
import Content from "./content";

function App() {
  const [name, setName] = useState()
  
  
  return (
    <div className="App">
    <input placeholder="Enter your name">

    </input>
    
    </div>
  )
}

export default App;
