import {useEffect} from "react";

const useTodos = (todos,dispatch) => {

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
    const onHandleDeleteTodo = (todoId)=>{
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }
    const onHandleToggleTodo = (todoId)=>{
        const action = {
            type: 'toggle',
            payload: todoId
        }
        dispatch(action);
    }

    return {
        onHandleNewTodo,
        onHandleDeleteTodo,
        onHandleToggleTodo,
        allTodosCount:todos.length,
        pendingTodosCount:todos.filter(todo => !todo.done).length
    }
}

export { useTodos }