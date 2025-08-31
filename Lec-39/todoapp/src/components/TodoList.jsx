import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, markComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo removeTodo={removeTodo} key={todo.id} todo={todo} markComplete={markComplete} />
      ))}
    </div>
  );
};

export default TodoList;
