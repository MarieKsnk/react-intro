import { useState } from 'react'
import User from './User'

function App() {

  const users = [
    {
      name: 'Marie',
      lastname: 'Ksnk',
      age: 27,
      profession: 'Webdesigneur'
    },
    {
      name: 'John',
      lastname: 'Doe',
      age: 30,
      profession: 'Software Engineer'
    },
    {
      name: 'Alice',
      lastname: 'Smith',
      age: 25,
      profession: 'Graphic Designer'
    },
    {
      name: 'Robert',
      lastname: 'Brown',
      age: 40,
      profession: 'Project Manager'
    }
  ];

  return (
    <>

    {users.map((user, index) => (
      <User key={index} {...user} />
    ))}
    </>
  )
}

export default App
