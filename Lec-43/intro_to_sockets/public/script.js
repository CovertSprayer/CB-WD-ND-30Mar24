const socket = io();

const form = document.querySelector(".chat-input");
const msgInput = document.querySelector("#message");
const messages = document.querySelector("#messages");

const usernameForm = document.querySelector(".username-input");

const usernameContainer = document.querySelector(".container");
const chatContainer = document.querySelector(".chat-container");

chatContainer.style.display = "none";

usernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  if(username.trim() === "") alert("Username can't be empty");

  socket.emit("username:set", {
    socketId: socket.id,
    username
  })

  usernameContainer.style.display = "none";
  chatContainer.style.display = "flex";
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = msgInput.value;
  if(message.trim() === "") return;

  socket.emit("message:new", {
    socketId: socket.id,
    message: message
  })

  msgInput.value = "";
})

socket.on("message:new", (data) => {
  console.log(data)
  const messanger = socket.id === data.socketId ? "sent" : "received";
  
  const div = document.createElement("div");
  div.innerText = `${data.username} -- ${data.message}`;
  div.classList.add(messanger);
  messages.append(div);
})

