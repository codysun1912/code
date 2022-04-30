import React, { useState } from 'react'

export default function About() {
  const [count, setCount] = useState(2)
  return (
    <div>
      hello {count}
      <div><button onClick={() => setCount(count + 1)}>Click</button></div>
    </div>
  )
}
