
const TodoItem = ({todo,index})=>{

    return (
        <li className="list-group-item d-flex justify-content-between ">
            <span className="align-self-center">{index + 1}. {todo.description} </span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    );
}

export {TodoItem}