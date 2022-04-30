import {useState} from "react";




function App() {
  const storageJob = JSON.parse(localStorage.getItem("jobs"))
  const [job , setJob] = useState("")
  const [jobs , setJobs] = useState(storageJob)

  const handleChange = () => {
       setJobs(prev =>{
         const dataJob =  [...prev , job]
         localStorage.setItem("jobs" ,JSON.stringify(dataJob))

         return dataJob
       })
       setJob("")
  }
  return (
    <div className="App">
    <input value={job} onChange={e => setJob(e.target.value)}/>
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
