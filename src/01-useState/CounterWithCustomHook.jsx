import {useCounter} from "../hooks/useCounter.js";

const CounterWithCustomHook = () => {
    const{counter,increment,decrement,reset} = useCounter(10)
    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr/>
            <button onClick={()=>increment(2)} className="btn btn-primary me-1">+1</button>
            <button onClick={reset} className="btn btn-primary me-1">Reset</button>
            <button onClick={decrement} className="btn btn-primary me-1">-1</button>
        </>
    )

}

export {CounterWithCustomHook}
