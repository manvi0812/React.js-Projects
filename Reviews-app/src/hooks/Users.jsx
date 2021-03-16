import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    }

    getUsers();
  });

  return (
    <div>
      {users.map((user) => (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ))}
    </div>
  );
}

export default Users;
