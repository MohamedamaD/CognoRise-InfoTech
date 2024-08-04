import propTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <ul className="list-group scrollable-todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object),
  deleteTodo: propTypes.func,
  editTodo: propTypes.func,
};
export default TodoList;
