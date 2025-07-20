const baseURL = 'http://localhost:4000';
const ul = document.querySelector('ul');


async function getTodos(){
  const res = await axios.get(`${baseURL}/todos`);
  const todos = res.data.data;

  for(let todo of todos){
    const li = document.createElement("li");
    li.innerText = todo.task;
    ul.append(li);
  }
}

getTodos();