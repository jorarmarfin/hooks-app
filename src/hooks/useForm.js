import {useState} from "react";

const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    /*{
        username: "lmayta",
            email: "luis@gmail.com",
        password: "123456"
    }*/
    const OnInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    const onResetForm = () => {
        setFormState(initialForm);
    }
    return{
        ...formState,
        formState,
        OnInputChange,
        onResetForm
    }
}

export{ useForm}