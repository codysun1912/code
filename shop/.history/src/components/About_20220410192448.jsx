import React, { useState } from 'react'

export default function About() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      hello {setCount}
      <div><button onClick={handleClick}>Click</button></div>
    </div>
  )
}
