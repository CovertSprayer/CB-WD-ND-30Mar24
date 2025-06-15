
const ul = document.querySelector("ul");

// console.log(ul.parentElement)
// console.log(ul.children)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

const h1 = document.createElement('h1')

h1.innerText = "Learning DOM";

console.log(h1)

const div = document.querySelector("div");

div.append(h1);

const li = document.createElement("li");
li.innerText = "four";
li.style.color = "red"
ul.append(li);

// ul.remove();


const p = document.createElement("p");
p.innerText = "Hello from p tag";

// ul.before(p);
// ul.after(p);