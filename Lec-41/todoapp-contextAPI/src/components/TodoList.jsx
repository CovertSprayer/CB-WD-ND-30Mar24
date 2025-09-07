import Todo from "./Todo";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodo();
  
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
