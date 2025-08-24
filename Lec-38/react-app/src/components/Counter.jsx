import React from 'react'
import { useState } from 'react';

function Counter() {
  // let count = 10;
  // count state
  const [count, setCount] = useState(10);

  function increment() {
    // count += 1;
    // console.log(count);
    setCount(count+1);
  }

  return (
    <>
      <span>{count}</span>
      <br />
      <button onClick={increment}>+1</button>
    </>
  )
}

export default Counter