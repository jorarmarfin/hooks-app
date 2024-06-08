const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alama',
    done: false
}]

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state
}
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del tiempo',
    done: false
}
const addTodoAction = {
    type: 'add',
    payload: newTodo
}
const todos = todoReducer(initialState, addTodoAction)
console.log(todos)