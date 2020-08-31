import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} value={} />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
