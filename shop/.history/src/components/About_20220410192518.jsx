import React, { useState } from 'react'

export default function About() {
  const [count, setCount] = useState(2)
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      hello {count}
      <div><button onClick={handleClick}>Click</button></div>
    </div>
  )
}
