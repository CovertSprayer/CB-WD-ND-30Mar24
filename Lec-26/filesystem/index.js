const fs = require("fs");
const path = require("path");

// const data = "Hi there! How are you";
const data = "Hello";
const filePath = path.join(__dirname, "data.txt");

// async
fs.writeFile(filePath, data, (err) => {
  if(err) {
    console.log("Something went wrong");
    return;
  }
  console.log("Data written successfully!")
})

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("Something went wrong");
    return;
  }
  console.log(data);
});

// fs.readFileSync
// fs.writeFileSync

