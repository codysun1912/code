import {useState} from "react";


const courses = [
  {
    id: 1,
    name:"HTML , CSS"
  }
]
function App() {
  const [name , setName] = useState("") 
  const [email , setEmail] = useState("") 

  const handleClick = () => {
    console.log({name,email})
    
    
  }
  return (
    <div className="App">
    <input value={name} onChange = {(e) => setName(e.target.value)}></input>
    <input value={email} onChange = {(e) => setEmail(e.target.value)}></input>
    <button onClick={handleClick}> Click</button>
    </div>
  );
}

export default App;
