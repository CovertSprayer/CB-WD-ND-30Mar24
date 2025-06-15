
const boxes = document.querySelectorAll(".box");

for(let box of boxes){
    box.addEventListener("click", (e) => {
        e.target.remove();
    })
}