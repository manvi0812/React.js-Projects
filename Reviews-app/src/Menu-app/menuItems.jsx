import React from "react";
import "./menuItem.css";

function MenuItems({ items }) {
  return (
    <div className='cards'>
      {items.map((item) => {
        const { id, title, price, img, desc, category } = item;
        return (
          <div className='box' key={id}>
            <img className='image' src={img} alt={title} />
            <h4>{title}</h4>
            <h5>{category}</h5>
            <h4>${price}</h4>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
