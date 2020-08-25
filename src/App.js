import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <img
          className="app-headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        />
      </div>

      <h2>Welcome to Diva's instagram clone!</h2>

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
