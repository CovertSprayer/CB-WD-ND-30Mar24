import { IoTrashBinSharp } from "react-icons/io5";

const Todo = ({ todo, removeTodo, markComplete }) => {

  const changeHandler = (e) => {
    markComplete(todo.id);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <input type="checkbox" onChange={changeHandler} defaultChecked={todo.completed} />
      <p style={{textDecoration: todo.completed ? "line-through" : "" }}>{todo.text}</p>
      <IoTrashBinSharp onClick={() => {
        removeTodo(todo.id)
      }}/>
    </div>
  );
};

export default Todo;
