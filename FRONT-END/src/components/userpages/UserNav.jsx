import { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Usernavbar() {
  const name = sessionStorage.getItem("username");
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
        <Navbar bg="secondary" expand="lg">
          <Navbar.Brand id="textcolor" className="fw-bold" href="/">
            <img src={logo} height="44vh" className="mx-4" />
          </Navbar.Brand>
          <div className="ps-3 pe-5 text-center">
            <h5 className="text-white ">
              Welcome &nbsp;
              <span>{name}</span>
            </h5>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              <Nav.Link classname="p-2" href="/postquestions">
                Post Questions
              </Nav.Link>
              <Nav.Link id="textcolor" href="/viewQuestion">
                View Questions
              </Nav.Link>
              <Nav.Link id="textcolor" href="/postquestion">
                Post Answers
              </Nav.Link>
              <Nav.Link id="textcolor" href="">
                PROFILE
              </Nav.Link>
              <Nav.Link id="textcolor" href="">
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
