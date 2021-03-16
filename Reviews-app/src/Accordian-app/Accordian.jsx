import React, { useState } from "react";
import questions from "./data";

function Accordian() {
  const [toggle, setToggle] = useState(false);
  const name = "fa fa-";
  return (
    <>
      <h1>Questions and Answers about login.</h1>
      <div>
        {questions.map((q) => (
          <div key={q.id}>
            <p>{q.title}</p>

            <p>
              {toggle ? q.info : `${q.info.substr(0, 0)}`}
              <button onClick={() => setToggle(!toggle)}>
                <i
                  className={
                    toggle ? `${name}minus-circle` : `${name}plus-circle`
                  }></i>
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordian;
