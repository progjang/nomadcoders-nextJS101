import {useState} from "react";

export default function Home() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h4>Counter: {counter}</h4>
            <button onClick = {()=>{setCounter((prev)=>prev+1)}}>+</button>
        </div>
    )
}