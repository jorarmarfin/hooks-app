import {useState} from "react";

const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    const suma1 = ()=>{
        setCounter({
            ...state,
            counter1: state.counter1 + 1,
        });
    }
    const {
        counter1: counter1,
        counter2: counter2,
        counter3: counter3,
    } = state;
    return (
        <>
            <h1>CounterApp</h1>
            <hr />
            <h2>Counter1: {counter1}</h2>
            <h2>Counter2: {counter2}</h2>
            <h2>Counter3: {counter3}</h2>
            <br/>
            <button onClick={suma1} className="btn btn-primary">+1</button>
        </>
    );

}

export {CounterApp}