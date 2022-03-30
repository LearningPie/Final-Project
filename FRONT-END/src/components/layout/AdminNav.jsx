import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
function AdminNav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="fluid-container">
          <div class="row justify-content-bet">
            <div class="col-md-4 d-flex justify-content-end">
              <h2 class="navbar-brand text-warning font-weight-bold">
                <img src={logo} height="44vh" className="mx-2" />
                <span className="text-white fs-4 ">Admin</span>
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
      </nav>
    </div>
  );
}

export default AdminNav;
