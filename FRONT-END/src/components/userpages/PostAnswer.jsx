import React, { useEffect, useState } from "react";
import { Dropdown, Form, Row } from "react-bootstrap";
import Usernavbar from "./UserNav";
import Sidebar from "../Sidebar";
import Footer from "../layout/footer";
import axios from "axios";
import Swal from "sweetalert2";

function Postanswer() {
  // useEffect(() => {
  //   document.title = "Home";
  //   if (sessionStorage.getItem("userSession") == null) {
  //     window.location = "/";
  //   } else if (localStorage.getItem("user") == null) {
  //     window.location = "/";
  //   }
  // }, []);

  let [ans, setAns] = useState("");
  let queId = sessionStorage.getItem("questionId");
  let Answer = {
    answer: ans,
    user: { userId: sessionStorage.getItem("userId") },
  };
  let giveAnswer = (e) => setAns(e.target.value);

  const Submit = (Answer) => {
    axios
      .post(`http://localhost:8080/postAnswer/${queId}`, Answer)
      .then((response) => {
        console.log(response.data);
      });
    window.location("/viewQuestions");
  };

  const validate = () => {
    if (ans.trim() === "") {
      Swal.fire("All fields are required");
    } else {
      Submit(Answer);
    }
  };
  return (
    <>
      <div>
        <div>
          <Usernavbar />
        </div>

        <div>
          <Sidebar />
          <Row
            className="Container justify-content-center "
            style={{ height: "100vh", width: "100%" }}
          >
            <div className="col-md-10">
              <h4 className="alert alert-info ">
                {sessionStorage.getItem("question")}
              </h4>
              <Form onSubmit={validate}>
                <Form.Group
                  className="mb-3 shadow"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Write your answer here......"
                    rows={15}
                    value={ans}
                    name="question"
                    onChange={giveAnswer}
                  />
                </Form.Group>

                <div className="d-flex justify-content-start">
                  <span>
                    <button className="btn btn-primary">SUBMIT</button>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="btn btn-danger">CLEAR</button>
                  </span>
                </div>
              </Form>
            </div>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Postanswer;
