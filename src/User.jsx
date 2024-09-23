

const User = () => {

    let info = {
    Name: "Marie",
    LastName: "Klisnick",
    Age: 27
    }

    const isAuthenticated = true

    return (<>
    <h1>Hello my name is :  {info.Name} {info.LastName}, j'ai {info.Age} ans</h1>
    <p>Je suis webdesigneuse & apprentie developpeuse web</p>
    {isAuthenticated ? (
        <>
        <h1>Welcome {info.Name}</h1>
        </>
    ) : (
        <>
        <h1>Please sign in</h1>
        <button>Sign in</button>
        </>
    )}
    </>
    )
}

export default User