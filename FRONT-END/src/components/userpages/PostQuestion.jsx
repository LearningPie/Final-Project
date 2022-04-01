import React, { useEffect, useState } from "react";
import { Dropdown, Form, Row } from "react-bootstrap";
import Usernavbar from "./UserNav";
import Sidebar from "../Sidebar";
import Footer from "../layout/footer";

function Postquestion() {
  // useEffect(() => {
  //   document.title = "Home";
  //   if (sessionStorage.getItem("userSession") == null) {
  //     window.location = "/";
  //   } else if (localStorage.getItem("user") == null) {
  //     window.location = "/";
  //   }
  // }, []);

  let [que, setQue] = useState("");
  let [sub, setSub] = useState("");
  let Question = {
    question: que,
    subject: sub,
    // user: {
    //   userId: sessionStorage.getItem(),
    // },
  };
  let setQuestion = (e) => setQue(e.target.value);
  let setSubject = (e) => setSub(e.target.value);
  const Submit = (Question) => {
    axios
      .post(`http://localhost:8080/postQuestion`, Question)
      .then((response) => {
        console.log(response.data);
      });
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
              <h4 className="alert alert-info ">Post Your Question Here</h4>
              <Form onSubmit={Submit}>
                <Form.Group
                  className="mb-3 shadow"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Write your question here......"
                    rows={15}
                    value={que}
                    name="question"
                    onChange={setQuestion}
                  />
                </Form.Group>

                <div className="d-flex justify-content-start">
                  <span>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select Subject
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item value={sub} name="subject">
                          JavaScript
                        </Dropdown.Item>
                        <Dropdown.Item value={sub} name="subject">
                          Database
                        </Dropdown.Item>
                        <Dropdown.Item value={sub} name="subject">
                          Reactjs
                        </Dropdown.Item>
                        <Dropdown.Item value={sub} name="subject">
                          ADS
                        </Dropdown.Item>
                        <Dropdown.Item value={sub} name="subject">
                          Java
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="btn btn-success">SUBMIT</button>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <button className="btn btn-danger">CANCEL</button>
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

export default Postquestion;
