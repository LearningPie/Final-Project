import {
  Button,
  Carousel,
  FormControl,
  Image,
  InputGroup,
  Row,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";
import Learning from "../components/Images/learning.png";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="rounded btn btn-light btn-lg" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b>Menu</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="col-md-12 ">
            <div className="border-bottom fs-5 mb-3">Home</div>

            <div className="border-bottom fs-5 mb-3">Links</div>
            <div className="border-bottom fs-5 mb-3">Resources</div>

            <img src={Learning} width="100%" height="100%" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
