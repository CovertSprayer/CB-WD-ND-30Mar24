const express = require("express");
const app = express();
const { v4: uuid } = require('uuid');


const todos = [
  {
    id: uuid(),
    todo: "Do something nice for someone you care about",
    completed: false,
  },
  {
    id: uuid(),
    todo: "Memorize a poem",
    completed: true,
  },
  {
    id: uuid(),
    todo: "Watch a classic movie",
    completed: true,
  },
];

// middleware
app.use(express.json()); // for json data
// app.use(express.urlencoded()); // for form data

app.get("/", (req, res) => {
  res.send("working fine");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { todo, completed } = req.body
  const id = uuid();
  todos.push({id, todo, completed});
  res.json(todos);
});

// delete
// { id = "dsfjlksdjfk=sdfljsdl=sdlfk"}
app.post("/todos/delete", (req, res) => {
  const id = req.body.id;
  const todoIndex = todos.findIndex(todo => todo.id == id);
  if(todoIndex != -1){
    todos.splice(todoIndex, 1);
  }

  res.json(todos);
})

// update
app.post("/todos/update/:id", (req, res) => {
  const { todo, completed } = req.body
  const id = req.params.id;
  const todoObj = todos.find(todo => todo.id == id);
  
  if(todoObj) {
    todoObj.todo = todo;
    todoObj.completed = completed;
  }

  res.json(todos);
})

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
