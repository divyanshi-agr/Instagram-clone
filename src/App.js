import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cmbyn_official",
      caption: "Coming soooonn...!!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRphepRtQcXYGq6QVhJWPzgjCgMX2I0Wt3z7g&usqp=CAU",
    },
    {
      username: "tchalamet",
      caption: "This is awesome...",
      imageUrl:
        "https://pmcdeadline2.files.wordpress.com/2018/11/timotheechalamet-0815_gabrielgoldberg.jpg?w=1024",
    },
  ]);

  return (
    <div className="App">
      <div className="app-header">
        <img
          className="app-headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        />
      </div>

      <h2>Welcome to Diva's instagram clone!</h2>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
