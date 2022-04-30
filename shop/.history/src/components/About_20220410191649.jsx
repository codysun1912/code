import React , {useState} from 'react'

export default function About() {
  const [job , setJob] = useState(0)
  return (
    <div>
      <p>hello {setJob}</p>
      <button onClick={() => setJob(job + 1)}>Click</button>
    </div>
  )
}
