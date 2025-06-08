// console.log(window.document)
// console.log(document)

const heading = document.getElementById("heading");
// console.log(heading)
// console.dir(heading);

// camelCase => backgroundColor
// kabeb case => background-color


heading.style.border = "2px solid red";
heading.style.backgroundColor = "teal";
heading.style.color = "white";

const paras = document.getElementsByTagName("p");
console.log(paras);

paras[0].style.color = "red"

for(let para of paras){
  para.style.color = "green";
}

const favFruits = document.getElementsByClassName("fav-fruit");
console.log(favFruits);

const newHeading = document.querySelector("#heading")
console.log(newHeading)

// const fruits = document.querySelector(".fav-fruit");
// console.log(fruits)

const span = document.querySelector("ul li span");
console.log(span)


// const li = document.querySelectorAll("li");
// console.log(li)


