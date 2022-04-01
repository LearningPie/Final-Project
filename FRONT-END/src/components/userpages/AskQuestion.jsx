import React, { useEffect, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "../userpages/UserNav";
import { InputGroup, FormControl, Accordion, Card, Nav } from "react-bootstrap";
import Java from "../Images/c++.png";
import axios from "axios";
import { Button } from "bootstrap";
import Sidebar from "../Sidebar";

function AskQuestion() {
  let [array, setArray] = useState([]);
  useEffect(async () => {
    let response = await axios.get(`http://localhost:8080/getAllQuestions`);
    setArray(response.data);
    console.log(array);
  }, []);
  return (
    <>
      <Usernavbar />
      <Sidebar />
      <div class="fluid-container ">
        <div class="row" style={{ height: "200vh" }}>
          <div class="col-md-2 bg-warning">One of three columns</div>
          <div class="col-md-8">
            <div className="row mb-2 d-flex justify-content-end">
              <div className="col-md-6">
                <InputGroup size="lg" className="mt-2">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Type Your Question Here...."
                  />
                  <button className="btn btn-primary">Search</button>
                </InputGroup>
              </div>
            </div>
            <div className="row overflow-auto" style={{ height: "90vh" }}>
              <div>
                {array.map((item) => (
                  <div>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        {/* <Accordion.Header>{question.solution}</Accordion.Header> */}
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                          {item.answerList.map((item) => (
                            <div>
                              <div class="card mb-3">
                                <div class="row g-0">
                                  <div class="col-md-2 d-flex justify-content-center align-items-center   ">
                                    <img src={Java} height="70px" />
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
                          ))}
                          <button className="btn btn-warning">Answer</button>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ))}
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
export default AskQuestion;
