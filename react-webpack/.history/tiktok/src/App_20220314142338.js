import {useState} from "react";

function App() {
  const [name , setName] = useState("") 
  const [name , setName] = useState("") 

  const handleClick = () => {
    
    
  }
  return (
    <div className="App">
    <input onChange = {(e) => setName(e.target.value)}></input>
    <input></input>
    <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
