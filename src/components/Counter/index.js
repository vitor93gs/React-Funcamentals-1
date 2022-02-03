import { useState } from "react"

export function Counter(){
    
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }

    return(
        <>
            <button type="button" onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button type="button" onClick={decrement}>Decrement</button>
        </>
    )
}