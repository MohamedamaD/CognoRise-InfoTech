import { ListGroup, Button, Form } from "react-bootstrap";
import propTypes from "prop-types";
import { useState } from "react";

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center mb-2">
      {isEditing ? (
        <Form.Control
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{todo.task}</span>
      )}
      <div>
        <Button variant="outline-primary" onClick={handleEdit} className="me-2">
          {isEditing ? "Save" : "Edit"}
        </Button>
        <Button variant="outline-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object,
  deleteTodo: propTypes.func,
  editTodo: propTypes.func,
};

export default TodoItem;
