import React from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <p>{title}</p>
            <div>
              <button onClick={() => editItem(id)} type='button'>
                <i className='fa fa-pencil-square-o' aria-hidden='true'></i>
              </button>
              <button onClick={() => removeItem(id)}>
                <i className='fa fa-trash' aria-hidden='true'></i>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
