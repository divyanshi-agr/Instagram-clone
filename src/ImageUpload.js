import React, { useState } from "react";

function ImageUpload() {
  const [caption, setCaption] = useState("");

  return (
    <div>
      <input type="text" placeholder="Enter a caption..." />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
