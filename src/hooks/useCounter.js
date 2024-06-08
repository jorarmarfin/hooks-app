import {useState} from "react";
import PropTypes from "prop-types";

const useCounter = (initValue = 10 ) => {
    const [counter, setCounter] = useState(initValue)
    const increment = (value) => {
        setCounter(counter + value)
    }
    const decrement = () => {
        if(counter=== 0) return ;
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initValue)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };
}

export {useCounter}

useCounter.propTypes = {
    initValue: PropTypes.number
}
