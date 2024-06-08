import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "lmayta",
        email: "luis@gmail.com"
    })
    const {username, email} = formState;
    const OnInpuntChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    useEffect(() => {
    }, [formState]);

    useEffect(() => {
    }, [username]);

    return (
        <div>
            <h1>useEffect</h1>
            <hr/>
            <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={username}
            onChange={OnInpuntChange}
            />
            <input
            type="email"
            className="form-control mt-2"
            placeholder="email"
            name="email"
            value={email}
            onChange={OnInpuntChange}
            />
            {
                username === "lmayta" && <Message />
            }
        </div>
    )
}

export{SimpleForm}
SimpleForm.propTypes = {

}