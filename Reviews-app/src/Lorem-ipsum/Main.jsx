import React, { useState } from "react";
import text from "./data";

function Main() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    setData(text.slice(0, amount));
  };
  return (
    <div>
      <h1>tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='submit'>Generate</button>
      </form>
      <article>
        {data.map((d, i) => {
          return <p key={i}>{d}</p>;
        })}
      </article>
    </div>
  );
}

export default Main;
