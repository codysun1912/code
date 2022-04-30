import {useState} from "react";

function App() {
  const [name , setName] = useState("") 
  const [email , setEmail] = useState("") 

  const handleClick = () => {
    
    
  }
  return (
    <div className="App">
    <input onChange = {(e) => setName(e.target.value)}></input>
    <input onChange = {(e) => setEmail(e.target.value)}></input>
    <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
