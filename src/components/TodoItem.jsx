
const TodoItem = ({todo,index,onDeleteTodo,onToggleTodo})=>{

    return (
        <li className="list-group-item d-flex justify-content-between ">
            <span
                onDoubleClick={()=>onToggleTodo(todo.id)}
                className={ ` align-self-center ${(todo.done) ? 'text-decoration-line-through':''} ` }>
                {index + 1}. {todo.description} </span>
            <button
                onClick={()=>onDeleteTodo(todo.id)}
                className="btn btn-danger">Borrar</button>
        </li>
    );
}

export {TodoItem}