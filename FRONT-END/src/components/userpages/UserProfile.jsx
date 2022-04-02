import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import base_url from "../../api/bootapi";
import UserNav from "./UserNav";
import Sidebar from "../Sidebar";
import Footer from "../layout/footer";
function Profile() {
  let userName = sessionStorage.getItem("userSession");
  useEffect(() => {
    // document.title = "Profile";
    // if (sessionStorage.getItem("userId") == null) {
    //   window.location = "/";
    // } else if (localStorage.getItem("user") == null) {
    //   window.location = "/";
    userProfile();
    // }
  }, []);

  const userProfile = () => {
    axios.post(`${base_url}/getuser/${userName}`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "User",
            text: "There are no users registered",
            icon: "error",
            button: "Ok",
          });
        }
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire("Server is down");
      }
    );
  };

  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div>
      <div className="bgimg">
        <div>
          <UserNav />
        </div>
        <Sidebar></Sidebar>
        <div className="container vh-100 mt-5 ">
          <div className="mt-5 row">
            <div className="col-md-3"></div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-5 ">
              <div className=" z-depth-3 mt-5">
                <div
                  className="col-sm-12 bg-white bg-light bg-opacity-50 text-dark mt-4 rounded-right pb-3"
                  style={{ borderRadius: "8px" }}
                >
                  <h3 className=" p-2 text-center font-weight-bold">
                    <b>PROFILE CARD</b>
                  </h3>
                  <hr className="badge-primary mt-0 " />
                  <div className="font-weight-bold p-2 fs-4 fw-bold">
                    UserName :{users.userName}
                  </div>
                  <hr className="bg-primary" />
                  <div className="font-weight-bold p-2 fs-4 fw-bold">
                    Name : {users.name}
                  </div>
                  <hr className="bg-primary" />
                  <h3 className="font-weight-bold p-2 fs-4 fw-bold">
                    Email ID : {users.email}
                  </h3>
                  <hr className="bg-primary" />
                  <h3 className="font-weight-bold p-2 fs-4 fw-bold">
                    Phone : {users.phoneNo}
                  </h3>
                </div>
              </div>
              <div className="row ">
                <div className="col-sm-12 justify-content-center">
                  <Link to="/updateProfile">
                    <button className="btn btn-lg btn-primary form-control">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 row">
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Profile;