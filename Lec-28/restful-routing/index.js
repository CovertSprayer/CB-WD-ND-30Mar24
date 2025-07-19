const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(express.urlencoded());
// app.use(express.json());
app.use(methodOverride('_method'));

const users = [
  {
    id: uuid(),
    firstName: "Rahul",
    lastName: "Verma",
    age: 30,
    gender: "male",
    profession: "SDE-3",
  },
  {
    id: uuid(),
    firstName: "Manish",
    lastName: "Yadav",
    age: 38,
    gender: "male",
    profession: "SDET-2",
  },
];

app.get("/", (req, res) => {
  res.send("working fine!!");
});

// get all users
app.get("/users", (req, res) => {
  res.render("users", { users });
});

// get form to create user
app.get("/users/new", (req, res) => {
  res.render("add");
});

// create user
app.post("/users", (req, res) => {
  const { firstName, lastName, gender, age, profession } = req.body;

  const userId = uuid();
  users.push({
    id: userId,
    firstName,
    lastName,
    gender,
    age,
    profession,
  });

  res.redirect("/users");
});

// get specific user
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  res.render("show", { user });
});

// to get prefilled form
app.get("/users/:id/edit", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  res.render("edit", { user });
});

// to update specific user
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, gender, age, profession } = req.body;

  const user = users.find(user => user.id == userId);

  if(firstName) user.firstName = firstName;
  if(lastName) user.lastName = lastName;
  if(age) user.age = age;
  if(gender) user.gender = gender;
  if(profession) user.profession = profession;

  res.redirect("/users");
})

// to delete specific user
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(user => user.id == userId);
  users.splice(userIndex, 1);
  res.redirect("/users");
})

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
