import { Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./userAvatar";

export default function Usernavbar() {
  const name = sessionStorage.getItem("name");
  let navigate = useNavigate();
  const endSession = () => {
    sessionStorage.removeItem("userSession");
    sessionStorage.removeItem("userdata");
    sessionStorage.removeItem("username");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="sticky-top">
        <Navbar expand="lg" style={{ backgroundColor: "#795548" }}>
          <Navbar.Brand id="textcolor" className="fw-bold" href="/">
            <img src={logo} height="44vh" className="mx-4" />
          </Navbar.Brand>
          <div className="ps-3 pe-5 text-center">
            <div className="text-white ">
              Welcome <br />
              <span>{name}</span>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              <Nav.Link className="text-light" href="/postquestion">
                Post Question
              </Nav.Link>
              <Nav.Link className="text-light" href="/viewQuestion">
                View Questions
              </Nav.Link>
              {/* <Nav.Link id="textcolor" href="/postAnswer">
                Post Answers
              </Nav.Link> */}
              <Nav.Link className="text-light" href="/userprofile">
                <UserAvatar userName={sessionStorage.getItem("name")} />
              </Nav.Link>

              <Nav.Link id="textcolor" href="/">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-danger">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
