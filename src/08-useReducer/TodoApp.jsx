import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "../components/TodoList.jsx";
import {TodoAdd} from "../components/TodoAdd.jsx";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done:false
    // },
    // {
    //     id: new Date().getTime() *3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done:false
    // }
];
const TodoApp = () => {

    const [todos,dispatch ] = useReducer(todoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onHandleNewTodo = (newTodo)=>{
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onHandleNewTodo} />
                </div>
            </div>
        </>
    )
}

export {TodoApp}