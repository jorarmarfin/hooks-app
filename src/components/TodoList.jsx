import {TodoItem} from "./TodoItem.jsx";

const TodoList = ({ todos }) => {

    return (
          <ul className="list-group" >
                {
                    todos.map((todo, index) => (
                        <TodoItem key={todo.id} todo={todo} index={index} />
                    ))
                }
          </ul>
    );
}

export { TodoList }