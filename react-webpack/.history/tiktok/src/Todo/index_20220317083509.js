import { useReducer,useRef} from "react";


const initState = {
  job:"",
  jobs:[]
}





 const reducer = (state , action) => {  
   let newState
   switch(action.type) {
     case SET_JOB:  
     newState = {
       ...state,
       job:action.payload
     }
     break
     case ADD_JOB: 
     newState ={
       ...state,
       jobs:[...state.jobs , action.payload]
     
     }
     break
     case DELETE_JOB: 
     const newJobs = [...state.jobs]
       newJobs.splice(action.payload ,1)
       
       
       newState = {...state,
        jobs: newJobs
      }
      break

      default:
       throw new Error("Invalid action")
     }
     return newState

   }
   

function App() {
  const [state , dispatch] = useReducer(reducer , initState)
  const {job , jobs} = state
  const inputRef = useRef()
  const handleAddJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))  

    inputRef.current.focus()

  }
  return (
    <div className="App">
    <h1>Todo</h1>
    <input
    ref={inputRef} 
    value = {job}
    placeholder="Enter your.."
    onChange = {e =>{dispatch(setJob(e.target.value))}}
    />
    <button onClick ={handleAddJob}>Add</button>
    <ul> 
    {jobs.map((job,index) => (
      <li key ={index}>{job} 
      <span onClick ={() => dispatch(deleteJob(index))}>&times;</span>
      </li>

    ))}
    </ul>

    </div>
  )
}

export default App;
