import { useState } from 'react'

const ReactCounter = () => {
  const [count, setCount] = useState(0)

  const add = () => setCount(count + 1)
  const subtract = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div>
      <h2>React count = {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ReactCounter
