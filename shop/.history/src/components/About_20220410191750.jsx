import React , {useState} from 'react'

export default function About() {
  const [jobs , setJobs] = useState(0)
  return (
    <div>
      <p>hello {setJobs}</p>
      <button onClick={() => setJobs(jobs + 1)}>Click</button>
    </div>
  )
}
