const colors = require('colors');
const figlet = require('figlet');

console.log("Hi there!".rainbow)

figlet("JavaScript", (err, data) => {
  console.log(data.rainbow);
})
