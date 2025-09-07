import { useContext } from "react";
import { v4 as uuid } from "uuid";
import {TodoContext} from "../context/TodoContext"

const TodoForm = () => {
  let inpText = "";
  const {addTodo} = useContext(TodoContext);

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