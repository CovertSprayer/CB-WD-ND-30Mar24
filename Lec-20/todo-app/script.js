const addBtn = document.querySelector("#todo-inputs button");
const inputElement = document.querySelector("#todo-inputs input");
const todoList = document.querySelector(".list");

addBtn.addEventListener("click", (e) => {
  const inpValue = inputElement.value;
  inputElement.value = "";

  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  newTodo.innerHTML = `
        <div class="left-section">
            <input class="checkbox" type="checkbox">
            <span>${inpValue}</span>
        </div>

        <div class="right-section">
            <span class="up-arrow">🔼</span>
            <span class="bin">🗑️</span>
            <span class="down-arrow">🔽</span>
        </div>`

  todoList.append(newTodo);
});
    


todoList.addEventListener("click", e => {
    if(e.target.classList.contains('bin')){
        e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains("checkbox")){
        const nextElem = e.target.nextElementSibling;
        nextElem.classList.toggle("checked");
    }

    if(e.target.classList.contains('up-arrow')){
        const currentTodo = e.target.parentElement.parentElement;
        const prevTodo = currentTodo.previousElementSibling;
        if(prevTodo) prevTodo.before(currentTodo);
        else{
            todoList.append(currentTodo)
        }
    }

    if(e.target.classList.contains('down-arrow')){
        const currentTodo = e.target.parentElement.parentElement;
        const nextTodo = currentTodo.nextElementSibling;
        if(nextTodo) nextTodo.after(currentTodo);
        else {
            todoList.prepend(currentTodo)
        }
    }
})