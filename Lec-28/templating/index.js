const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send("working fine!!");
})

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum)
  res.render("index.ejs", {
    title: "My App",
    num: randomNum
  })
})

app.get('/todos', (req, res) => {
  const todos = [
    'Learn EJS',
    'Learn Node',
    'Go for a walk',
    'Watch some movie'
  ];

  res.render("todos", {
    todos: todos,
  })
})

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
})

// <% if(){ %>

// <% }else{ %>
  
// <% } %>

