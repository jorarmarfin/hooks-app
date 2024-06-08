import {useRef} from "react";

const FocusScreen = () => {

    const inputRef = useRef();

    const onFocus = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />
            <input
                type="text"
                className="form-control"
                placeholder="Apellido paterno"
            />
            <input
                type="text"
                className="form-control"
                placeholder="Apellido materno"
            />
            <button
                onClick={onFocus}
                className="btn btn-outline-primary mt-5">Focus</button>

        </div>
    );
}

export { FocusScreen }