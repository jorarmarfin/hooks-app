import {TodoItem} from "./TodoItem.jsx";

const TodoList = ({ todos,onDeleteTodo,onToggleTodo }) => {

    return (
          <ul className="list-group" >
                {
                    todos.map((todo, index) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            index={index}
                            onDeleteTodo={onDeleteTodo}
                            onToggleTodo={onToggleTodo} />
                    ))
                }
          </ul>
    );
}

export { TodoList }