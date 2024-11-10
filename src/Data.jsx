import React, { useState } from "react";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };
  getData();
  return (
    <div>
      {posts.map((json) => {
        return <p key={json.id}></p>;
      })}
    </div>
  );
};

export default Data;
