import React, { useEffect, useState } from "react";
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
    axios.post(`http://localhost:8080/login`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or you have not registered yet.",
          });
        } else {
          if (response.data.status == true) {
            window.location = "/admin";
            //sessionStorage.setItem("admin", "admin");
            sessionStorage.setItem("adminId", response.data.userId);
          } else {
            sessionStorage.setItem("name", response.data.name);
            //sessionStorege.setItem("userId", response.data[0].status);
            // const userdata = {
            //   name: response.data[0].name,
            //   email: response.data[0].email,
            //   userName: response.data[0].userName,
            //   phoneNo: response.data[0].phoneNo,
            // };
            // sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data.userName);
            sessionStorage.setItem("userId", response.data.userId);
            //localStorage.setItem("user", response.data[0].userName);
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
          <div
            className="col-12 col-md-3 bg-opacity-50 bg-light  p-4"
            style={{ borderRadius: "8px" }}
          >
            <div className="h2 alert alert-success  text-center">Login</div>
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
                <Link to="/forget" class="text-decoration-none  ">
                  Forgot password?
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn  btn-primary mt-3 ">
                  Login
                </button>
              </div>

              <div className="text-center mt-3">
                <div className="">
                  Not Registered??
                  <Link to="/register" className="text-primary ">
                    Register Here...
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
