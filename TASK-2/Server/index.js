const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let todos = []; 

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
  res.status(204).end();
});

app.put("/todos/:id", (req, res) => {
  const { task } = req.body;
  todos = todos.map((todo) =>
    todo.id === parseInt(req.params.id) ? { ...todo, task } : todo
  );
  res.json(todos.find((todo) => todo.id === parseInt(req.params.id)));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
