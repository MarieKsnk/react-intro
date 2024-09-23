const Button = () => {

    const clickMe = () => {
        console.log("Hello World")
    }

    return(
        <button onClick={clickMe}>Click me</button>
    )
}

export default Button