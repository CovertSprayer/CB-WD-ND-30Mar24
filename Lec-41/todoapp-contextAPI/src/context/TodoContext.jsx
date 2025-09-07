import { createContext, useContext, useState } from "react";
import { v4 as uuid} from "uuid";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
}

export function TodoProvider({children}) {
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
  };

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const markComplete = (todoId) => {
    const newTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo, markComplete}}>
      {children}
    </TodoContext.Provider>
  );
}