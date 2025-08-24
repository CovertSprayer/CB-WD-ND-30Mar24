import React from "react";
import Todo from "./Todo";

function TodoList() {
  const todos = [
    "Make the bed",
    "Drink a glass of water",
    "Check emails/messages",
    "Create or review daily schedule",
    "Complete work/study tasks",
    "Take a short walk or stretch",
    "Prepare and eat meals",
    "Tidy up workspace or living area",
    "Read for 15–30 minutes",
    "Plan tomorrow’s tasks",
  ];

  let name = "Tinku"

  // let output = "No Name";
  // if(name) output = name;

  return (
    <>
      {/* <p>{output}</p> */}

      { name ?  <p>{name}</p> : <p>No Name</p>}


      <ul>
        {/* <Todo todo="testing"/> */}
        {/* {todos.map(todo => <li>{todo}</li>)} */}
        {todos.map((todo, ind) => <Todo key={ind} todo={todo}/>)}
      </ul>
    </>
  );
}

export default TodoList;
