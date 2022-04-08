import axios from "axios";
import { useState } from "react";

export default function UploadPdf() {
  const [selectedFile, setSelectedFile] = useState();
  const upload = async () => {
    console.log(selectedFile);
    const data = new FormData();
    data.append("groupId", sessionStorage.getItem("joingroupId"));
    data.append("profilePic", selectedFile);
    const response = await axios.post(
      `http://localhost:8080/upload-pdfs`,
      data
    );
  };
  return (
    <div>
      <form onSubmit={upload}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button className="btn btn-warning">Upload</button>
      </form>
    </div>
  );
}