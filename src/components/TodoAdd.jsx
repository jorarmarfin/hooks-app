import {useForm} from "../hooks/useForm.js";

const TodoAdd = ({onNewTodo})=>{

    const {description,OnInputChange,onResetForm} = useForm({description:''})

    const onFormSubmit = (e)=>{
        e.preventDefault();
        if(description.trim().length <= 1)return;
        const newTodo = {
            id: new Date().getTime(),
            done:false,
            description
        }
        onNewTodo(newTodo);
    }
    return (
        <form onSubmit={onFormSubmit} >
            <input
                type="text"
                name="description"
                placeholder="Que hago..."
                autoComplete="off"
                className="form-control"
                value={description}
                onChange={OnInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block">
                Agregar
            </button>
        </form>
    );
}

export {TodoAdd}