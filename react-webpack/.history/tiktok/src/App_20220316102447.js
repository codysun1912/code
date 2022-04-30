import { useReducer} from "react";

const initState = {
  job:"",
  jobs:[]
}

const SET_JOB = "set-job"
const ADD_JOB = "add-job"
const DELETE_JOB = "delete-job"

 const reducer = (state , action) => {

 }



function App() {
  const [state , dispatch] = useReducer(reducer , initState)
  const [job , jobs] = state
  
  
  return (
    <div className="App">
    <h1>Todo</h1>
    <input 
    value = {job}
    placeholder="Enter your..">

    </input>
    <button>Add</button>
    <ul> {jobs.map(job => (
      <li>Rua bat &times;</li>

    ))}
      
     
    </ul>

    
    </div>
  )
}

export default App;
