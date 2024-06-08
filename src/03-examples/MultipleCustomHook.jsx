import {useFetch} from "../hooks/useFetch.js";
import {useState} from "react";
import {Card} from "./Card.jsx";

const MultipleCustomHook = () => {
    const [counter, setCounter] = useState(1)
    const {data, hasError, loading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        if(counter === 1) return;
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr/>
            {
                loading ? <p>Cargando...</p>
                    :<Card title={data?.name} images={data?.sprites.front_default} sprites={[data?.sprites]} />
            }

            <button onClick={decrement} className="btn btn-primary">Regresar</button>
            <button onClick={increment} className="btn btn-primary ms-1">Siguiente</button>
        </>
    );
}

export { MultipleCustomHook}