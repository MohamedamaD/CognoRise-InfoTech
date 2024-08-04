import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AddTodo, TodoList } from "./components";

import axios from "axios";
const API_URL = "http://localhost:5000/todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((response) => setTodos(response.data));
  }, []);

  const addTodo = (task) => {
    axios.post(API_URL, { id: Date.now(), task }).then((response) => {
      setTodos([...todos, response.data]);
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const editTodo = (id, newTask) => {
    axios.put(`${API_URL}/${id}`, { task: newTask }).then((response) => {
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    });
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="justify-content-center w-100">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title className="mb-4 text-center">To-Do List</Card.Title>
              <AddTodo addTodo={addTodo} />
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
