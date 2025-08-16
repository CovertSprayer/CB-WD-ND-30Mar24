const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const session = require("express-session");

app.use(session({
  secret: 'keyboard cat',
}))

app.get("/", (req, res) => {
  console.log(req.session);
  res.send("working fine!")
})

app.get("/set-session", (req, res) => {
  req.session.name = "shreyance";
  res.send("session set successfully!")
})

app.get("/get-session", (req, res) => {
  res.send(req.session);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});