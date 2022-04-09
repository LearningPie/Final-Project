import axios from "axios";
import { useState } from "react";

export default function UploadPdf() {
  const [selectedFile, setSelectedFile] = useState();
  const validate = () => {
    //console.log(selectedFile);
    var fileInput = document.getElementById("file");

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert("Invalid file type");
      fileInput.value = "";
      return false;
    }
    return true;
  };
  const upload = async () => {
    if (validate()) {
      console.log(selectedFile);
      const data = new FormData();
      data.append("groupId", sessionStorage.getItem("joingroupId"));
      data.append("profilePic", selectedFile);
      const response = await axios.post(
        `http://localhost:8080/upload-pdfs`,
        data
      );
    }
  };
  return (
    <div>
      <form onSubmit={upload}>
        <input
          type="file"
          id="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button className="btn btn-warning">Upload</button>
      </form>
    </div>
  );
}
