import {useState} from 'react'


const Button = () => {

    const [count, setCount] = useState(0)
// const [isOpen, setIsOpen] = useState(false)
// const [name, setName] = useState('')

    const incrementCounter = () => {
        setCount(count + 5)
    }

    const decrementCounter = () => {
        setCount(count - 5)
    }

    return(
        <>
        <h1>Counter : {count}</h1>
        <button onClick={incrementCounter}>+ 5</button>
        <button onClick={decrementCounter}>- 5</button>

        {/* {isOpen ? <p>Wlecome you can order what you want</p> : <p>Sorry we are close</p>}
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>

        <br />

        {name}

        <form action="">
            <input type="text" onChange={e => setName(e.target.value)}/>
        </form> */}
        </>
    )
}

export default Button