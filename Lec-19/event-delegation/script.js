
// const children = document.querySelectorAll(".child");

// console.log(children.length)
// for(let childEl of children) {
//   childEl.addEventListener('click', (e) => {
//     console.log(e.target.innerText)
//   })
// }

const parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
  if(e.target.classList.contains("child")){
    console.log(e.target.innerText)
  }
})
