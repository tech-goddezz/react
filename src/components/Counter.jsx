import { useState } from "react";

function Counter() {

    const [array, setArray] = useState([]);

    return (
        <>

        <div className="counter">
            <h1> {array.toString()} </h1>


            <button onClick={() => {
                setArray((prev) => [
                    ...prev,
                    '+1'
                ])
            }}>Increment</button>

            <button onClick={() => {
                setArray((prev) => [
                    ...prev,
                    '-1'
                ])
            }}>Decrement</button>


        </div>
            
        </>
    );
};

export default Counter;