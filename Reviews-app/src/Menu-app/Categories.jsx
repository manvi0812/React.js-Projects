import React from "react";

function Categories({ filterItems, categories }) {
  return (
    <div>
      {categories.map((c, index) => {
        return (
          <button key={index} onClick={() => filterItems(c)}>
            {c}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
