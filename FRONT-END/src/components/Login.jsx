import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi.js";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import Mainnavbar from "./layout/Mainnavbar.jsx";
import "../css/bgimg.css";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [user, setUser] = useState({});

  //Handler of Login form
  const handlerForm = (e) => {
    checkLogin(user);
    e.preventDefault();
  };

  //Login check method
  const checkLogin = (data) => {
    axios.post(`${base_url}/login`, data).then(
      (response) => {
        //alert(response.data.JSON.stringify);
        if (response.data.length == 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or you have not registered yet.",
          });
        } else {
          if (response.data[0].status == true) {
            window.location = "/admin";
            sessionStorage.setItem("admin", "admin");
          } else {
            sessionStorage.setItem("username", response.data[0].name);
            const userdata = {
              name: response.data[0].name,
              email: response.data[0].email,
              userName: response.data[0].userName,
              phoneNo: response.data[0].phoneNo,
            };
            sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data[0].userName);
            localStorage.setItem("user", response.data[0].userName);
            window.location = "/user";
          }
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  return (
    <>
      <Mainnavbar />

      <div className="container-fluid bgimg">
        <div
          className="row  align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          <div className="col-12 col-md-4 rounded shadow-lg bg-light bg-opacity-50 p-4">
            <div className=" h3 alert alert-success fw-bold text-center">
              Login
            </div>
            <form onSubmit={handlerForm}>
              <div className="mb-3">
                <input
                  type="text"
                  id="uName"
                  name="uName"
                  className="form-control form-control-lg"
                  placeholder="Enter the user name"
                  onChange={(e) => {
                    setUser({ ...user, userName: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter the Password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>

              <div class="col-md-12 mt-3 text-center">
                <Link
                  to="/forget"
                  class="text-decoration-none text-primary fs-5"
                >
                  Forgot password?
                </Link>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" className="btn btn-lg btn-primary mt-3 ">
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <h6>
                  Not Registered??
                  <Link
                    to="/register"
                    className="text-primary text-decoration-none"
                  >
                    &nbsp; Register Here...
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
