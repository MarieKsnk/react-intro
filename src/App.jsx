import { useState } from 'react'
import User from './user'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <User />
    </>
  )
}

export default App
