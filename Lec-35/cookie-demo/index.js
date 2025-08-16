const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

// signed cookies, unsigned cookies


app.use(cookieParser("we_need_some_better_password"));

// Routes
app.get('/', (req, res) => {
  // const { viewMode } = req.cookies;
  console.log(req.cookies);
  // res.send(req.cookies);
  res.send(req.signedCookies);
});

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "1234xyz", {
    maxAge: 7 * 24 * 60 * 60 * 1000,  // time in ms
    // expires: new Date("2025-08-18")
    signed: true
  });
  res.send("cookie set successfully!");
})




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});