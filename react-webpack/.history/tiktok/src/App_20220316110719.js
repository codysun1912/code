import { useReducer} from "react";

const initState = {
  job:"",
  jobs:[]
}

const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DELETE_JOB = "delete_job"

const setJob = payload => {
  return{
    type:SET_JOB,
    payload
  }
}
const addJob = payload => {
  return{
    type:ADD_JOB,
    payload
  }
}


 const reducer = (state , action) => {
   switch(action.type) {
     case SET_JOB:  
     return {
       ...state,
       job:action.payload
     }
     case ADD_JOB: 
     return {
       ...state,
       jobs:[...state.jobs , action.payload]
     
     }
     default:
       throw new Error("Invalid action")

   }
   


 }

function App() {
  const [state , dispatch] = useReducer(reducer , initState)
  const {job , jobs} = state
  const handleAddJob = () => {
    dispatch(addJob(job))

  }
  
  
  return (
    <div className="App">
    <h1>Todo</h1>
    <input 
    value = {job}
    placeholder="Enter your.."
    onChange = {e =>{dispatch(setJob(e.target.value))}}
    />
    <button onClick ={handleAddJob}>Add</button>
    <ul> 
    {jobs.map((job,index) => (
      <li key ={index}>{job} &times;</li>

    ))}
    </ul>

    </div>
  )
}

export default App;
