import React, { useState } from "react";
import menu from "./data";
import MenuItems from "./menuItems";
import Categories from "./Categories";
const types = ["all", ...new Set(menu.map((m) => m.category))];

function Menu() {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(types);

  const filterItems = (category) => { 
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <>
      <h1>Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuItems items={items} />
    </>
  );
}

export default Menu;
