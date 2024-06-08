import {useEffect} from "react";

const Message = () => {

    useEffect(() => {
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
        }
    }, []);


    return (
        <>
            <h1>Usuario ya existe</h1>
        </>
    );
}

export { Message }
