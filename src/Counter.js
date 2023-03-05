import React, { useState } from "react";


function Counter({ initialCount}) {
 const [count, setCount] = useState(initialCount);
    
 const increment = () =>{
    setCount((prev) => prev +1);
 }

 const decrement = () =>{
    setCount((prev) => prev -1)
 }

 const restart = () => {
    setCount(0)
 }

 const switchSigns = () =>{
    setCount((prev) => prev * -1)
 }

 return(
    <div>
        <h1>
            Count: <h3>{count}</h3>
        </h1>
        <div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={restart}>Reset</button>
            <button onClick={switchSigns}>Change Sign</button>
        </div>
    </div>
 )
}

export default Counter