import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import axios from "axios";
import UserNav from "./UserNav";
import base_url from "../../api/bootapi.js";

function UpdateProfile() {
  //   useEffect(() => {
  //     document.title = "Updateprofile";
  //     if (sessionStorage.getItem("userSession") == null) {
  //       window.location = "/";
  //     } else if (localStorage.getItem("user") == null) {
  //       window.location = "/";
  //     }
  //   }, []);

  let userName = sessionStorage.getItem("userSession");
  let [uname, setUname] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let [uconpassword, setUconpassword] = useState("");

  let unameinp = (e) => setUname(e.target.value);
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);
  let uconpasswordinp = (e) => setUconpassword(e.target.value);

  let user = {
    name: uname,
    email: uemail,
    userName: userName,
    password: upassword,
    phoneNo: uphone,
  };

  //Register data
  const updateUser = (data) => {
    axios.put(`${base_url}/updateuser/${userName}`, data).then(
      (response) => {
        swal.fire("updated").then(function () {
          window.location = "/profile";
        });
        clearFields();
      },
      (error) => {
        console.log(error);
        swal.fire("Server is down");
      }
    );
  };

  let [ename, setEname] = useState();
  let [eemail, setEemail] = useState();
  let [ephone, setEphone] = useState();
  let [epassword, setEpassword] = useState();
  let [econpassword, setEconpassword] = useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setEname("");

    document.getElementById("phone").classList.remove("is-invalid");
    setEphone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");

    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");

    document.getElementById("conpassword").classList.remove("is-invalid");
    setEconpassword("");
  }

  function clearFields() {
    setUphone("");
    setUemail("");
    setUpassword("");
    setUconpassword("");
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === "" ||
      uconpassword.trim === ""
    ) {
      swal.fire("All fields are  required");
    } else if (
      uname.search(/^[a-zA-Z ]*$/) < 0 ||
      uname.length < 3 ||
      uname.length > 40
    ) {
      document.getElementById("name").classList.add("is-invalid");
      setEname(
        "Please enter characters only and must have length of minimum 3 and maximum 30"
      );
    } else if (uphone === "" || uphone.search(/^[789][0-9]{9}$/) < 0) {
      document.getElementById("phone").classList.add("is-invalid");
      setEphone("Enter valid Mobile Number");
    } else if (
      uemail === "" ||
      uemail.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Enter valid Email ID");
    } else if (
      upassword === "" ||
      upassword.search(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/
      ) < 0 ||
      upassword.length < 6
    ) {
      document.getElementById("password").classList.add("is-invalid");
      setEpassword(
        "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
      );
    } else if (upassword !== uconpassword) {
      document.getElementById("conpassword").classList.add("is-invalid");
      setEconpassword("Password mismatch.");
    } else {
      swal.fire("updated");
      updateUser(user);
      clearErrors();
      clearFields();
    }
  };

  return (
    <div className=" bgimg vh-100">
      <div className="mb-5">
        <UserNav />
      </div>

      <div className=" d-flex justify-content-center mt-5 bgimg">
        <div className="m-auto w-50 pt-2 ps-5 pe-5 pb-2 mt-5 align-self-center text-white reg-form">
          <h1 className="text-center display-4">Update Profile</h1>

          <form className="row g-3 bg-light bg-opacity-50 mt-1">
            <div className="col-md-6">
              <label for="userName" className="form-label fs-5">
                UserName
              </label>
              <input
                id="uName"
                name="uname"
                className="form-control"
                value={userName}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label for="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Full name"
                onChange={unameinp}
                onFocus={clearErrors}
                value={uname}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{ename}</div>
            </div>

            <div className="col-md-6">
              <label for="email" className="form-label fs-5">
                Email-ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Eg:-abc@gmail.com"
                onChange={uemailinp}
                onFocus={clearErrors}
                value={uemail}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{eemail}</div>
            </div>

            <div className="col-md-6">
              <label for="phone" className="form-label fs-5">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Without +91"
                onChange={uphoneinp}
                onFocus={clearErrors}
                value={uphone}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{ephone}</div>
            </div>

            <div className="col-md-6">
              <label for="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter a strong password"
                onChange={upasswordinp}
                onFocus={clearErrors}
                value={upassword}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{epassword}</div>
            </div>
            <div className="col-md-6">
              <label for="conpassword" className="form-label fs-5">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="conpassword"
                name="conpassword"
                placeholder="Confirm entered password"
                onChange={uconpasswordinp}
                onFocus={clearErrors}
                value={uconpassword}
                required
              />
              <div class="invalid-feedback fs-6 fw-bold">{econpassword}</div>
            </div>

            <div className="col-md-12 text-center">
              <input
                type="button"
                className="btn btn-lg btn-primary"
                value="Update"
                onClick={validate}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
