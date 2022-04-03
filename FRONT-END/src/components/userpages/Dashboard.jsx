import React, { useEffect, useRef, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "../userpages/UserNav";
import { InputGroup, FormControl, Accordion } from "react-bootstrap";
import Java from "../Images/c++.png";
import axios from "axios";
import Sidebar from "../Sidebar";
import UserAvatar from "./userAvatar";

function Dashboard() {
  let [array, setArray] = useState([]);
  useEffect(async () => {
    let response = await axios.get(
      `http://localhost:8080/getAllQuestionsByUser/${sessionStorage.getItem(
        "userId"
      )}`
    );
    setArray(response.data);
    console.log(response.data);
  }, []);
  return (
    <>
      <Usernavbar />
      <Sidebar />

      <div class="fluid-container ">
        <div class="row" style={{ height: "160vh" }}>
          <div class="col-md-2 bg-warning">One of three columns</div>
          <div class="col-md-8">
            <h1 className="text-center">
              <div className="alert alert-warning">Dashboard</div>
            </h1>
            <div className="row overflow-auto" style={{ height: "120vh" }}>
              <div>
                {array.length > 0 ? (
                  array.map((item) => (
                    <div>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          {/* <Accordion.Header>{question.solution}</Accordion.Header> */}
                          <Accordion.Header>
                            <div className="d-flex justify-content-between align-items-center w-100">
                              {item.question}
                              <button
                                className="btn btn-warning mx-4"
                                onClick={() => {
                                  window.location = "/postAnswer";
                                  sessionStorage.setItem(
                                    "question",
                                    item.question
                                  );
                                  sessionStorage.setItem(
                                    "questionId",
                                    item.questionId
                                  );
                                }}
                              >
                                Answer
                              </button>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            {item.answerList.length > 0 ? (
                              item.answerList.map((item) => (
                                <div>
                                  <div class="card mb-3">
                                    <div class="row g-0">
                                      <div class="col-md-2 d-flex justify-content-center align-items-center   ">
                                        {/* <UserAvatar name={item.user.userName} /> */}
                                      </div>
                                      <div class="col-md-10">
                                        <div class="card-body">
                                          <h5 class="card-title">
                                            {item.user.userName}
                                          </h5>
                                          <p class="card-text">{item.answer}</p>
                                          <p class="card-text">
                                            {/* <button className="btn btn-primary">
                                          Like
                                        </button>
                                        &nbsp;{" "}
                                        <button className="btn btn-primary">
                                          Dislike
                                        </button> */}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>No Answers Yet</div>
                            )}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))
                ) : (
                  <div className="row">
                    <h2 className="text-center mt-5">
                      Not Posted Any Question Yet....
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="col-md-2 bg-primary"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Dashboard;
