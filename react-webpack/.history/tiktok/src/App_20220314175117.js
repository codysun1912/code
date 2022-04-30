import {useState} from "react";




function App() {
  const [job , setJob] = useState("")
  const [jobs , setJobs] = useState([])

  const handleChange = () => {

  }


  

 
  return (
    <div className="App">
    <input value="job" onChange={e => setJob(e.target.value)}/>
    <button onClick ={handleChange}>Add</button>

    <ul>
    {jobs.map((job , index) => (
      <li key = {index}>{job}</li>

    ))}
      
    </ul>
    
     
    </div>
  );
}

export default App;
