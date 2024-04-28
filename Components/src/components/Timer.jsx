import { useState } from "react";


export default function Timer() {
    const [count, setCount] = useState(0);
    const borderValues = {max: 5, min: 0};
    return (
        <div>
            <p>{count}</p>
            <button 
                disabled={count <= borderValues.min}
                className={count <= borderValues.min ? "error" : null}
                onClick={() => setCount((prevVal) => prevVal - 1)}
            >Decrement -</button>

            <button 
                disabled={count >= borderValues.max}
                className={count >= borderValues.max ? "error" : null}
                onClick={() => setCount((prevVal) => prevVal + 1)}
            >Increment +</button>

        </div>
    )
}   