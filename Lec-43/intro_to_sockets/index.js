const express = require("express");
const { createServer } = require("http");
const { Server: socketServer } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new socketServer(server);

app.use(express.static("public"));

const users = {};

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("message:new", (data) => {
    io.emit("message:new", {
      ...data, username: users[data.socketId]
    })
  })

  socket.on("username:set", (data) => {
    users[data.socketId] = data.username;
  })
})

server.listen(5000, () => {
  console.log("server is up at port", 5000);
});