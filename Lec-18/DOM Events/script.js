
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

let num = 1;

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = num;
    ul.append(li);
    num++;
})

// function hello() {
//     console.log("hello")
// }

// function bye() {
//     console.log("bye")
// }

// let isClicked = false;

// btn.addEventListener("click", function() {
//     if(!isClicked){
//         hello();
//     } else {
//         bye()
//     }
//     isClicked = !isClicked;
// })


// btn.addEventListener("click", function() {
//     console.log("hello");
// })

// btn.addEventListener("dblclick", () => {
//     console.log("dbl clicked")
// })


