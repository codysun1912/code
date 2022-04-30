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


 const reducer = (state , action) => {

  let newState
   
   switch (action.type) {
     case SET_JOB:
       newState = {
         ...state,
         job: action.payload
       }
       break
       default:
         throw new Error("Invalid action")

   }

 }



function App() {
  const [state , dispatch] = useReducer(reducer , initState)
  const [job , jobs] = state
  
  
  return (
    <div className="App">
    <h1>Todo</h1>
    <input 
    value = {job}
    placeholder="Enter your.."
    onChange ={e =>{dispatch(setJob(e.target.value))}}
    />
    <button>Add</button>
    <ul> 
    {jobs.map((job,index) => (
      <li key ={index}>{job} &times;</li>

    ))}
    </ul>

    </div>
  )
}

export default App;
