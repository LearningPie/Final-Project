import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
function AdminNav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };
  return (
    <div>
      {/* <nav
        class="navbar navbar-expand-md navbar-dark fixed-top p-2"
        style={{ backgroundColor: "#795548" }}
      >
        <div class="fluid-container">
          <div class="row justify-content-bet">
            <div class="col-md-4 d-flex justify-content-end">
              <h2 class="navbar-brand text-warning font-weight-bold">
                <img src={logo} height="44vh" className="mx-2" />
                <span className="text-white  ">Admin</span>
              </h2>
            </div>
            <div class="col-md-8 d-flex justify-content-end">
              <div
                class="collapse navbar-collapse text-center"
                id="collapsenavbar"
              >
                <ul class="navbar-nav ml-auto ">
                  <li class="nav-item ms-5">
                    <Link to="/admin" className="nav-link text-white">
                      View Question
                    </Link>
                  </li>

                  <li class="nav-item ms-5">
                    <Link to="" className="nav-link text-white">
                      View Answer
                    </Link>
                  </li>

                  <li class="nav-item ms-5">
                    <Link to="/adminusers" className="nav-link text-white">
                      View Users
                    </Link>
                  </li>

                  <li class="nav-item  nav-logout">
                    <button
                      class="btn btn-sm btn-primary ps-3 pe-3 p-2"
                      onClick={logoutAdmin}
                      type="submit"
                    >
                      &nbsp;&nbsp;LOGOUT&nbsp;&nbsp;
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="sticky-top">
        <Navbar expand="lg" style={{ backgroundColor: "#795548" }}>
          <Navbar.Brand id="textcolor" className="fw-bold" href="/">
            <img src={logo} height="44vh" className="mx-4" />
          </Navbar.Brand>
          <div className="ps-3 pe-5 text-center">
            <div className="text-white ">
              Welcome <br />
              {/* <span>{name}</span> */}
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              <Nav.Link classname="p-2" href="/postquestion">
                View Questions
              </Nav.Link>
              <Nav.Link id="textcolor" href="/viewQuestion">
                View Answers
              </Nav.Link>
              <Nav.Link id="textcolor" href="/userList">
                View Users
              </Nav.Link>
              {/* <Nav.Link id="textcolor" href="/userprofile">
                Profile
              </Nav.Link> */}
              <Nav.Link id="textcolor" href="/">
                <form onSubmit={logoutAdmin} action="/">
                  <button type="submit" class="btn btn-sm btn-danger">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default AdminNav;
