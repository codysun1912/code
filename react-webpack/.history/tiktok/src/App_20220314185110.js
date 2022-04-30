import {useState} from "react";
import Content from "./content";




function App() {
  const [show, setShow]  = useState(false)
 
  return (
    <div className="App">
    <Content/>
    </div>
  );
}

export default App;
