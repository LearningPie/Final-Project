import { Button } from "bootstrap";
import { Card } from "react-bootstrap";
import pdf from "../Images/pdf-file.png";
import download from "../Images/download.png";
import view from "../Images/view.png";

export default function Resources({ link }) {
  const fileName = link.split("/");
  const file = fileName.pop().split("-");

  return (
    <div className="row align-items-center shadow-lg mb-5 ">
      <div className="col-md-1">
        <img src={pdf} width="80px" />
      </div>
      <div className="col-md-9 fw-bold">{file[1]}</div>
      <div className="col-md-1">
        <a href={link} target="_blank" className="btn ">
          <img src={view} width="40px" />
        </a>
      </div>
      <div className="col-md-1">
        <a href={link} className="btn " download>
          <img src={download} width="40px" />
        </a>
      </div>
    </div>
  );
}
