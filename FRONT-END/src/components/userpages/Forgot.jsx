import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";
import { Link } from "react-router-dom";

function Forget() {
  useEffect(() => {
    document.title = "Forget Password";
  }, []);

  const [usere, setusere] = useState("");
  const [usero, setUsero] = useState("");
  const [usera, setusera] = useState("");
  const [userpwd, setuserpwd] = useState("");
  const [userconpwd, setuserconpwd] = useState("");

  const data = {
    email: usere,
  };

  const getEmail = (data) => {
    axios.post(`${base_url}/verifyEmail`, data).then(
      (response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          swal.fire({
            title: "Opps",
            text: "Please enter valid email you used for registration",
            icon: "error",
          });
        } else {
          swal.fire({
            icon: "success",
            title: "Wew! Email Verified.",
            text: "Now you can set a new password by answering security question and I hope you dont forget this one",
          });
          setuserq(response.data[0].securityQues);
          setusere(response.data[0].email);
          document.getElementById("email").disabled = true;
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

  const pass = {
    email: usere,
    password: userpwd,
    otp: usero,
  };
  // const updatePass = (pass) => {
  //   axios.put(`${base_url}/updatepassword`, pass).then(
  //     (response) => {
  //       console.log(response);
  //       if (response.data.length == 0) {
  //         swal.fire({
  //           title: "Oh NO!",
  //           text: "Your answer does not match the one you have entered during registration",
  //           icon: "error",
  //         });
  //         document.getElementById("securityAns").value = "";
  //         document.getElementById("password").value = "";
  //         document.getElementById("conpassword").value = "";
  //       } else {
  //         setNew(pass);
  //         clearFields();
  //         clearError();
  //         swal
  //           .fire({
  //             icon: "success",
  //             title: "Finally!!!",
  //             text: "You have reset the password.Keep it safe and reuser it for login",
  //           })
  //           .then(function () {
  //             window.location = "/";
  //           });
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  const setNew = (update) => {
    axios.put(`${base_url}/updatepassword`, update).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const clearFields = () => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conpassword").value = "";
  };
  const clearError = () => {
    document.getElementById("email").classList.remove("is-invalid");
    setEemail("");

    document.getElementById("password").classList.remove("is-invalid");
    setEpassword("");
    document.getElementById("conpassword").classList.remove("is-invalid");
    setEconpassword("");
  };

  const [eemail, setEemail] = useState("");
  const [eans, setEans] = useState("");
  const [epassword, setEpassword] = useState("");
  const [econpassword, setEconpassword] = useState("");

  const evalidate = (e) => {
    if (usere === "") {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Please enter this field");
      setusere("");
    } else if (
      usere.search(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) < 0
    ) {
      document.getElementById("email").classList.add("is-invalid");
      setEemail("Please enter an valid email id");
      setusere("");
    } else {
      getEmail(data);
    }
    e.preventDefault();
  };
  const validate = (e) => {
    if (usero === "" || userpwd === "" || userconpwd === "") {
      swal.fire("All fields are required");
    } else if (usero.length <= 0 || usero.length > 5) {
      document.getElementById("securityAns").classList.add("is-invalid");
      setEans("Enter OTP length above 0 or less than 5");
    }
    // } else if (
    //   userpwd == "" ||
    //   userpwd.search(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,20}$/) <
    //     0 ||
    //   userpwd.length < 10
    // ) {
    //   document.getElementById("password").classList.add("is-invalid");
    //   setEpassword(
    //     "Enter a password with atleast 8 characters and must include 1 capital, 1 number and 1 special character"
    //   );
    // } else if (userpwd != userconpwd) {
    //   document.getElementById("conpassword").classList.add("is-invalid");
    //   setEconpassword("Password mismatch.");
    // }
    else {
      setNew(pass);
      e.preventDefault();
    }
  };
  return (
    <div>
      <div className="container " style={{ width: "40%" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className=" z-depth-3 mt-3">
              <div
                className="col-sm-12 col-md-10 rounded-right bg-dark text-white p-2 mt-2  m-auto"
                style={{
                  backgroundColor: "white",
                  opacity: 0.8,
                }}
              >
                <h2 className="mt-3 mb-3 text-center font-weight-bold">
                  <b>Forgot Password</b>
                </h2>

                <div className="row mb-4 ms-5">
                  <h4 className="font-weight-bold">
                    First enter registered Email&nbsp;
                    <span className="fs-5">(and verify it)</span>:{" "}
                  </h4>
                </div>
                <div className="row mb-4 ms-5">
                  <div className="col-sm-8">
                    <input
                      className="form-control text-white"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email Here....."
                      style={{ background: "transparent" }}
                      value={usere}
                      onFocus={clearError}
                      onChange={(e) => {
                        setusere(e.target.value);
                      }}
                    />
                    <div className="invalid-feedback fs-6 fw-bold">
                      {eemail}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <input
                      className="btn btn-primary btn-md text-center"
                      type="button"
                      value="Verify Email"
                      onClick={evalidate}
                    />
                  </div>
                </div>

                <div className="row mb-4 ms-5">
                  <div className="col-sm-6">
                    <h4 className="font-weight-bold">Enter OTP : </h4>
                    <input
                      type="number"
                      placeholder="Enter your OTP"
                      style={{ background: "transparent" }}
                      className="form-control text-white"
                      id="securityAns"
                      name="securityAns"
                      value={usero}
                      onFocus={clearError}
                      onChange={(e) => {
                        setUsero(e.target.value);
                      }}
                    />
                    <div className="invalid-feedback fs-6 fw-bold">{eans}</div>
                  </div>
                </div>

                <div className="row mb-4 ms-5">
                  <div className="col-sm-8">
                    <h4 className="font-weight-bold">New Password : </h4>
                    <input
                      type="password"
                      placeholder="Enter your New Password Here....."
                      style={{ background: "transparent" }}
                      className="form-control text-white"
                      id="password"
                      name="password"
                      value={userpwd}
                      onFocus={clearError}
                      onChange={(e) => {
                        setuserpwd(e.target.value);
                      }}
                    />
                    <div className="invalid-feedback fs-6 fw-bold">
                      {epassword}
                    </div>
                  </div>
                </div>

                <div className="row mb-4 ms-5">
                  <div className="col-sm-8">
                    <h4 className="font-weight-bold">Confirm Password : </h4>
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password Here....."
                      style={{ background: "transparent" }}
                      className="form-control text-white"
                      id="conpassword"
                      name="conpassword"
                      value={userconpwd}
                      onFocus={clearError}
                      onChange={(e) => {
                        setuserconpwd(e.target.value);
                      }}
                    />
                    <div className="invalid-feedback fs-6 fw-bold">
                      {econpassword}
                    </div>
                  </div>
                </div>

                <div className="row text-center">
                  <div className="col-sm-6" style={{ textAlign: "right" }}>
                    <Link className="btn btn-danger btn-lg mb-2 me-5" to="/">
                      &nbsp; Back &nbsp;
                    </Link>
                  </div>
                  <div className="col-sm-6" style={{ textAlign: "left" }}>
                    <form>
                      <input
                        className="btn btn-primary btn-lg mb-2 ms-5"
                        type="button"
                        onClick={validate}
                        value="Submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
