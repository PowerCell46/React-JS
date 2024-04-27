import { useState } from "react";


export default function Timer() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prevVal) => setCount(prevVal - 1))}>Decrement -</button>
            <button onClick={() => setCount((prevVal) => setCount(prevVal + 1))}>Increment +</button>
        </div>
    )
} 