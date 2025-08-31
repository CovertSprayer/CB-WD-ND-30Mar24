import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
  const dummy_data = [
    { id: uuid(), text: "Learn JS", completed: false },
    { id: uuid(), text: "Learn React", completed: true },
    { id: uuid(), text: "Learn Node", completed: false },
    { id: uuid(), text: "Learn CPP", completed: true },
    { id: uuid(), text: "Learn JAVA", completed: false },
  ];

  const [todos, setTodos] = useState(dummy_data);

  const addTodo = (text) => {
    setTodos((prevState) => [...prevState, {id: uuid(), text, completed: false}])

    // wrong practice (not recommended)
    // const newTodos = todos;
    // newTodos.push({id: uuid, text, completed:false })


    // setTodos([...todos, { id: uuid, text, completed: false }]);
    // setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const markComplete = (todoId) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    // todos.map(todo => {
    //   if(todo.id === todoId){
    //     return {
    //       ...todo,
    //       completed: !todo.completed
    //     }
    //   } else {
    //     return todo;
    //   }
    // })
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} markComplete={markComplete} />
    </div>
  );
};

export default TodoApp;
