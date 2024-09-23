import { useState } from 'react'
import User from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <User />
    </>
  )
}

export default App
