import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import base_url from "../api/bootapi.js";
import axios from "axios";
import Mainnavbar from "./layout/Mainnavbar.jsx";
import "../css/bgimg.css";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  let [uname, setUname] = useState("");
  let [userName, setUsername] = useState("");
  let [uphone, setUphone] = useState("");
  let [uemail, setUemail] = useState("");
  let [upassword, setUpassword] = useState("");
  let [uconpassword, setUconpassword] = useState("");
  let [usecurityQues, setUsecurityQues] = useState("");
  let [usecurityAns, setUsecurityAns] = useState("");

  let unameinp = (e) => setUname(e.target.value);
  let userNameinp = (e) => setUsername(e.target.value);
  let uphoneinp = (e) => setUphone(e.target.value);
  let uemailinp = (e) => setUemail(e.target.value);
  let upasswordinp = (e) => setUpassword(e.target.value);
  let uconpasswordinp = (e) => setUconpassword(e.target.value);
  let usecurityquesinp = (e) => setUsecurityQues(e.target.value);
  let usecurityansinp = (e) => setUsecurityAns(e.target.value);

  let user = {
    name: uname,
    email: uemail,
    userName: userName,
    password: upassword,
    phoneNo: uphone,
    securityQuestion: usecurityQues,
    securityAnswer: usecurityAns,
  };

  //Register data
  const registerUser = (data) => {
    axios.post(`${base_url}/register`, data).then(
      (response) => {
        swal
          .fire({
            icon: "success",
            title: "Hurreh!!!",
            text: "You have registered to a great cause",
          })
          .then(function () {
            window.location = "/login";
          });
        clearFields();
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Enter UserName first",
          text: "We need to check if the UserName is already registered or not",
        });
      }
    );
  };

  //Check Email
  const checkUserName = (data) => {
    axios.post(`${base_url}/findbyusername`, data).then(
      (response) => {
        console.log(response);
        if (response.data.length == 0) {
          registerUser(user);
          clearErrors();
          clearFields();
        } else {
          swal.fire({
            icon: "error",
            title: "Oh no!!!",
            text: "UserName is already Registered",
          });
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

  let [ename, setEname] = useState();
  let [eUname, seteUname] = useState();
  let [eemail, setEemail] = useState();
  let [ephone, setEphone] = useState();
  let [epassword, setEpassword] = useState();
  let [econpassword, setEconpassword] = useState();
  let [esecurityQues, setEsecurityQues] = useState();
  let [esecurityAns, setEsecurityAns] = useState();
  let [etnc, setEtnc] = useState();

  function clearErrors() {
    document.getElementById("name").classList.remove("is-invalid");
    setEname("");

    document.getElementById("uName").classList.remove("is-invalid");
    seteUname("");

    document.getElementById("phone").classList.remove("is-invalid");
    setEphone("");

    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");

    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");

    document.getElementById("conpassword").classList.remove("is-invalid");
    setEconpassword("");

    document.getElementById("securityQues").classList.remove("is-invalid");
    setEsecurityQues("");

    document.getElementById("securityAns").classList.remove("is-invalid");
    setEsecurityAns("");

    document.getElementById("tnc").classList.remove("is-invalid");
    setEtnc("");
  }

  function clearFields() {
    setUname("");
    setUsername("");
    setUphone("");
    setUemail("");
    setUpassword("");
    setUconpassword("");
    setUsecurityQues("");
    setUsecurityAns("");
    document.getElementById("tnc").checked = false;
  }

  let validate = () => {
    if (
      uname.trim() === "" ||
      userName.trim() === "" ||
      uphone.trim() === "" ||
      uemail.trim() === "" ||
      upassword.trim() === "" ||
      uconpassword.trim === "" ||
      usecurityQues.trim() === "" ||
      usecurityAns.trim() === ""
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
    } else if (
      userName === "" ||
      userName.search(/^[a-zA-Z0-9 ]*$/) < 0 ||
      userName.length < 3 ||
      userName.length > 15
    ) {
      document.getElementById("uName").classList.add("is-invalid");
      seteUname(
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
    } else if (usecurityAns.length <= 3 || usecurityAns.length > 40) {
      document.getElementById("securityAns").classList.add("is-invalid");
      setEsecurityAns("Enter Answer lenght above 2 or less than 40");
    } else if (document.getElementById("tnc").checked == false) {
      document.getElementById("tnc").classList.add("is-invalid");
      setEtnc("Please accept terms and conditions");
    } else {
      checkUserName(user);
    }
  };

  return (
    <div>
      <Mainnavbar />
      <div className=" fluid-container bgimg" style={{ height: "100vh" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-5">
            <form
              className="row g-3 bg-light bg-opacity-50 mt-1 p-3"
              style={{ borderRadius: "8px" }}
            >
              <div className="h2 col-md-12 text-center m-0 fs-3 alert alert-success">
                Register Here
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
                <label for="userName" className="form-label fs-5">
                  UserName
                </label>
                <input
                  id="uName"
                  className="form-control"
                  name="uname"
                  placeholder="Enter User Name"
                  onChange={userNameinp}
                  onFocus={clearErrors}
                  value={userName}
                  required
                />
                <div class="invalid-feedback fs-6 fw-bold">{eUname}</div>
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

              <div className="col-md-6">
                <label for="securityQues" className="form-label fs-5">
                  Security Question
                </label>
                <select
                  id="securityQues"
                  className="form-select"
                  name="securityQues"
                  onChange={usecurityquesinp}
                  onFocus={clearErrors}
                  value={usecurityQues}
                  required
                >
                  <option selected>Enter your Security Question </option>
                  <option value="Which was your first vehicle?">
                    Which was your first vehicle?
                  </option>
                  <option value="Which is your favourite color?">
                    Which is your favourite color?
                  </option>
                  <option value="Which was your first school?">
                    Which was your first school?
                  </option>
                </select>
                <div class="invalid-feedback fs-6 fw-bold">{esecurityQues}</div>
              </div>
              <div className="col-md-6">
                <label for="securityAnswer" className="form-label fs-5">
                  Your answer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="securityAns"
                  name="securityAns"
                  placeholder="Remember this for forget password"
                  onChange={usecurityansinp}
                  onFocus={clearErrors}
                  value={usecurityAns}
                  required
                />
                <div class="invalid-feedback fs-6 fw-bold">{esecurityAns}</div>
              </div>

              <div className="  col-md-7 text-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="tnc"
                  name="tnc"
                  required
                />
                <label for="tnc" className="form-label ">
                  Accept terms and conditions
                </label>
                <div class="invalid-feedback fs-6 fw-bold">{etnc}</div>
              </div>
              <div className=" text-center text-left col-md-5">
                <Link
                  to="/termsandconditions"
                  href="#"
                  className="text-decoration-none text-light "
                  id="tnc"
                >
                  T & C
                </Link>
              </div>

              <div className="col-md-12 text-center">
                <input
                  type="button"
                  className="btn btn-lg btn-primary"
                  value="Register"
                  onClick={validate}
                />
              </div>
              <div className="col-md-12 text-center">
                <h6>
                  Already Registered?
                  <Link
                    to="/login"
                    href="login.html"
                    className="text-decoration-none text-info fs-5"
                  >
                    &nbsp; Login here
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
