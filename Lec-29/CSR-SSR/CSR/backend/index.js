const express = require("express");
const app = express();
const { v4: uuid } = require('uuid');
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors())

const todos = [
  {
    id: uuid(),
    task: "Learn CSR",
    completed: false
  },
  {
    id: uuid(),
    task: "Learn SSR",
    completed: false
  }
];


app.get('/todos', (req, res) => {
  res.json({
    success: true,
    data: todos,
    message: "success"
  })
})

app.get("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todo = todos.find(todo => todo.id === todoId);
  res.json({
    success: true,
    data: todo,
    message: "success"
  })
})

app.post("/todos", (req, res) => {
  try {
    const { task } = req.body.task;
    const todoId = uuid();
    todos.push({
      id: todoId,
      completed: false,
      task: task
    });

    res.json({
      success: true,
      data: todos,
      message: "success"
    })
  } catch (error) {
    console.log("Error in creating todo", error);
    res.json({
      success: false,
      message: error.message
    })
  }
})

app.listen(4000, (req, res) => {
  console.log("server is up at port", 4000);
})