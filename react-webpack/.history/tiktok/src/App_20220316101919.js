import { useReducer} from "react";

const initState = {
  job:"",
  jobs:[]
}


function App() {
  
  
  return (
    <div className="App">
    <h1>Todo</h1>
    <input placeholder="Enter your..">

    </input>
    <button>Add</button>
    <ul>
      <li>Rua bat &times;</li>
      <li>Quet nha &times;</li>
      <li>Lau nha &times;</li>
    </ul>

    
    </div>
  )
}

export default App;
