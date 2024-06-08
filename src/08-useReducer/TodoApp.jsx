import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "../components/TodoList.jsx";
import {TodoAdd} from "../components/TodoAdd.jsx";
import {useTodos} from "../hooks/useTodos.js";

const initialState = [];
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
const TodoApp = () => {

    const [todos,dispatch ] = useReducer(todoReducer, initialState, init);
    const { onHandleNewTodo, onHandleDeleteTodo, onHandleToggleTodo,allTodosCount,pendingTodosCount } = useTodos(todos,dispatch);
    return (
        <>
            <h1>TodoApp, Total: {allTodosCount}, pendientes: {pendingTodosCount}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={onHandleDeleteTodo}
                        onToggleTodo={onHandleToggleTodo}
                    />
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