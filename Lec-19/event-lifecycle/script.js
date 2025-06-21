const parentEl = document.querySelector(".parent")
const childEl = document.querySelector(".child")
const grandChildEl = document.querySelector(".grand-child")


parentEl.addEventListener("click", e => {
  e.stopPropagation();
  console.log("Parent El clicked!")
}, true)

childEl.addEventListener("click", e => {
  console.log("Child El clicked!")
}, false)

grandChildEl.addEventListener("click", e => {
  console.log("Grand Child El clicked!")
}, true)