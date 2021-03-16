import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // getting data
    async function getPosts() {
      const result = await axios(apiEndpoint);
      setPosts(result.data);
    }

    getPosts();
  }, []);

  const handleAdd = async () => {
    // creating data
    const obj = { title: "a", body: "b" };
    const post = await axios.post(apiEndpoint, obj);
    console.log(post.data);
    const pos = [post.data, ...posts];
    console.log(pos);
    setPosts(pos);
  };

  const handleUpdate = async (post) => {
    // updating data
    post.title = "UPDATED";
    // const { data } =
    await axios.put(apiEndpoint + "/" + post.id, post); // sent post argument to the server.
    // console.log(data);
    // //update the UI:
    const pos = [...posts]; // clone the posts state array
    const index = pos.indexOf(post); // find the index of post in the array
    pos[index] = { ...post }; // create a new object and spread the post argument.
    setPosts(pos);
  };

  const handleDelete = async (post) => {
    // deleting data
    await axios.delete(apiEndpoint + "/" + post.id);
    const pos = posts.filter((p) => p.id !== post.id);
    setPosts(pos);
  };

  return (
    <>
      <button onClick={handleAdd} className='add'>
        ADD
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th className='left'>Title</th>
            <th className='right'>
              <button className='toggle'>UPDATE</button>
            </th>
            <th className='right'>
              <button className='toggle'>DELETE</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className='space'>{post.title}</td>
              <td className='space'>
                <button onClick={() => handleUpdate(post)} className='update'>
                  Update
                </button>
              </td>
              <td className='space'>
                <button onClick={() => handleDelete(post)} className='delete'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Posts;
