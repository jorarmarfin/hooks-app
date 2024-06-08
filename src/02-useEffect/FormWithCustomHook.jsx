import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";
import {UseForm} from "../hooks/useForm.js";

const FormWithCustomHook = () => {

    const {formState, OnInputChange,username,email,password,onResetForm} = UseForm({
        username: "",
        email: "",
        password: ""
    });



    return (
        <div>
            <h1>Formulario con custom hook</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={OnInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={OnInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Paswword"
                name="password"
                value={password}
                onChange={OnInputChange}
            />
            <button onClick={onResetForm} className="btn btn-success mt-2">Reset</button>
            {
                username === "lmayta" && <Message/>
            }
        </div>
    )
}

export {FormWithCustomHook}
FormWithCustomHook.propTypes = {}