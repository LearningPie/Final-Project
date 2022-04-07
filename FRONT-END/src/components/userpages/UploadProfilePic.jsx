import axios from "axios";
import { useState } from "react";

export default function UploadProfilePic() {
  const [selectedFile, setSelectedFile] = useState();
  const upload = async () => {
    console.log(selectedFile);
    const data = new FormData();
    data.append("userId", sessionStorage.getItem("userId"));
    data.append("profilePic", selectedFile);
    const response = await axios.post(
      `http://localhost:8080/upload-profile-pic`,
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
        <button className="btn btn-warning">Upload Your Picture</button>
      </form>
    </div>
  );
}
