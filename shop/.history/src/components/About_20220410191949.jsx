import React, { useState } from 'react'

export default function About() {
  const [jobs, setJobs] = useState(0)
  return (
    <div>
      hello {setJobs}
      <div><button onClick={handleClick}>Click</button></div>
    </div>
  )
}
