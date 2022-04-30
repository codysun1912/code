import {useState} from "react";
import Content from "./content";




function App() {
  const [show, setShow]  = useState(false)
 
  return (
    <div className="App">
    <button onClick={() => setShow(false)}>Toggle</button>
    </div>
  );
}

export default App;
