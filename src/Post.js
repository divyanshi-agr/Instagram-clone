import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar className="post-avatar" alt="Divaagr" src="" />
        <h3>Username</h3>
      </div>

      <img
        className="post-image"
        src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
      />

      <h4 className="post-text">
        <strong>divyanshi-agr</strong> HEYYYYYYY IM BACK!!!!!
      </h4>
    </div>
  );
}

export default Post;
