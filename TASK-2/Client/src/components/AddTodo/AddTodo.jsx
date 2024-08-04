import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import propTypes from "prop-types";

function AddTodo({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </InputGroup>
    </Form>
  );
}

AddTodo.propTypes = {
  addTodo: propTypes.func,
};

export default AddTodo;
