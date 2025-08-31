import { v4 as uuid } from "uuid";

const TodoForm = ({addTodo}) => {
  let inpText = "";

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(inpText);
  }

  const changeHandler = (e) => {
    inpText = e.target.value;
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler}/>
      <button>Add</button>
    </form>
  )
}

export default TodoForm