import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import base_url from "../../api/bootapi";
import UserNav from "./UserNav";

function Profile() {
  let userName = sessionStorage.getItem("userSession");
  //   useEffect(() => {
  //     document.title = "Profile";
  //     if (sessionStorage.getItem("userSession") == null) {
  //       window.location = "/";
  //     } else if (localStorage.getItem("user") == null) {
  //       window.location = "/";
  //     }
  //     userProfile();
  //   }, []);

  const userProfile = () => {
    axios.post(`${base_url}/getuser/${userName}`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "Admin",
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
    <div className="bgimg">
      <div>
        <UserNav />
      </div>

      <div className="container vh-100 mt-5 ">
        <div className="mt-5 row">
          <div className="col-md-3"></div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-6 mt-5">
            <div className=" z-depth-3 mt-5">
              <div className="col-sm-12 bg-white bg-light bg-opacity-50 text-dark mt-4 rounded-right pb-3">
                <h3 className=" p-2 text-center font-weight-bold">
                  <b>PROFILE CARD</b>
                </h3>
                <hr className="badge-primary mt-0 " />
                <h3 className="font-weight-bold p-2">
                  UserName :{users.userName}
                </h3>
                <hr className="bg-primary" />
                <h3 className="font-weight-bold p-2">Name : {users.name}</h3>
                <hr className="bg-primary" />
                <h3 className="font-weight-bold p-2">
                  Email ID : {users.email}
                </h3>
                <hr className="bg-primary" />
                <h3 className="font-weight-bold p-2">
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
  );
}

export default Profile;
