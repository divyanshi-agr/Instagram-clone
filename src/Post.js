import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        className="post-image"
        src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      />
      {/* image */}

      <h4>
        <strong>divyanshi-agr:</strong> HEYYYYYYY IM BACK!!!!!
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
