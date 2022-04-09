import { Button, Offcanvas, Nav } from "react-bootstrap";
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
      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "20%", backgroundColor: "#673AB7" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b>Menu</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="row">
            <div className="col-md-12 border-bottom">
              <Nav.Link href="/user" className="text-light">
                Home
              </Nav.Link>
            </div>
            <div className="col-md-12  border-bottom">
              <Nav.Link href="/joinGroup" className="text-light">
                Explore Groups
              </Nav.Link>
            </div>
            {/* <div className="col-md-12  border-bottom">
              <Nav.Link href="#action2" className="text-light">
                Resource
              </Nav.Link>
            </div> */}
            <div className="col-md-12  border-bottom">
              <Nav.Link href="/dashboard" className="text-light">
                Dashboard
              </Nav.Link>
            </div>
            <div className="col-md-12  border-bottom">
              <Nav.Link href="/userJoinedGroupList" className="text-light">
                Go to group
              </Nav.Link>
            </div>

            {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div>
            <img src={Learning} width="100%" height="50%" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
