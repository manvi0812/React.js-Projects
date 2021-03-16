import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <p>{name} has clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
