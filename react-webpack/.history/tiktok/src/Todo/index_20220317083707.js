import { useReducer,useRef} from "react";

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
