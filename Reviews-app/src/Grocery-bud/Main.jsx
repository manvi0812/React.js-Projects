import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function Main() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "item edited", "success");
    } else {
      showAlert(true, "item added to the list", "success");
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([newItems, ...list]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "empty list", "danger");
  };

  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div>
          <input
            type='text'
            placeholder='e.g. bananas'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit'>{isEditing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button onClick={clearList}>clear items</button>
        </div>
      )}
    </div>
  );
}

export default Main;
