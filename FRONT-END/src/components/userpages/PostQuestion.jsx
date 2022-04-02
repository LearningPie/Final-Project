import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, Form, Row } from "react-bootstrap";
import swal from "sweetalert2";
import UserNav from "./UserNav";
import base_url from "../../api/bootapi.js";
import Sidebar from "../Sidebar";
import Footer from "../layout/footer";
import { Link } from "react-router-dom";

function Postquestion() {
  useEffect(() => {
    document.title = "Home";
    // if (sessionStorage.getItem("userSession") == null) {
    //   window.location = "/";
    // } else if (localStorage.getItem("user") == null) {
    //   window.location = "/";
    // }
  }, []);

  let [que, setQue] = useState("");
  let [sub, setSub] = useState("");
  let userId = sessionStorage.getItem("userId");

  let Question = {
    question: que,
    subject: sub,
    user: { userId: userId },
  };

  let setQuestion = (e) => setQue(e.target.value);
  let setSubject = (e) => setSub(e.target.value);

  const submit = (Question) => {
    axios.post(`${base_url}/postQuestion`, Question).then(
      (response) => {
        console.log(response.data);
        swal.fire({
          icon: "Success",
          title: "Congratulations",
          text: "Your question is posted",
        });

        window.location = "/user";
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

  let [eque, setEque] = useState("");

  const validate = () => {
    if (que.trim() === "" || sub.trim() === "") {
      swal.fire("All fields are required");
    } else if (que.search(/^[a-zA-Z?=. ]*$/) < 0) {
      document.getElementById("que").classList.add("is-invalid");
      setEque("Enter a valid question");
    } else {
      submit(Question);
    }
  };

  return (
    <>
      <div>
        <div>
          <UserNav />
        </div>
        <Sidebar></Sidebar>
        <div>
          <Row className="Container" style={{ height: "100vh", width: "100%" }}>
            <div className="row justify-content-center">
              <div className="col-md-8   ">
                <h4 className="alert alert-info ">Post Your Question Here</h4>
                <Form onSubmit={validate}>
                  <Form.Group
                    className="mb-3 shadow"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      id="que"
                      placeholder="Write your question here......"
                      rows={15}
                      value={que}
                      name="question"
                      onChange={setQuestion}
                    />
                    <div class="invalid-feedback fs-6 fw-bold">{eque}</div>
                  </Form.Group>
                  <span>
                    <div className="d-flex justify-content-start mb-2">
                      <select
                        id="sub"
                        class="form-select "
                        style={{ width: 200 }}
                        name="subject"
                        value={sub}
                        onChange={setSubject}
                        required
                      >
                        <option selected>Select Subject</option>
                        <option value="Java">Java</option>
                        <option value="ADS">ADS</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Database">Database</option>
                        <option value="JavaScript">JavaScript</option>
                      </select>
                      <div class="invalid-feedback fs-6 fw-bold">{}</div>
                    </div>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="btn btn-success">SUBMIT</button>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="btn btn-danger">CANCEL</button>
                  </span>
                </Form>
              </div>
            </div>
          </Row>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Postquestion;
