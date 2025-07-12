const express = require('express');
const app = express();

const todos = ["Learn Nodejs", "Learn Reactjs"]

// method, route and controller/handler function
app.get("/", (req, res) => {
  res.send("Hello there!")
})

app.get("/todos", (req, res) => {
  res.send(todos);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
})