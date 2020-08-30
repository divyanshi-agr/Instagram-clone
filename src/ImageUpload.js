import React from "react";

function ImageUpload() {
  return (
    <div>
      <input type="text" />
      <input type="file" onChange={handleChnage} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
