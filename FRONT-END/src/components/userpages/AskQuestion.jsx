import React, { useEffect, useRef, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "../userpages/UserNav";
import { InputGroup, FormControl, Accordion } from "react-bootstrap";
import Java from "../Images/c++.png";
import axios from "axios";
import Sidebar from "../Sidebar";
import Postanswer from "./PostAnswer";
import { Popover } from "bootstrap";
import Datatable from "../Datatable";

function AskQuestion() {
  let [array, setArray] = useState([]);
  useEffect(async () => {
    let response = await axios.get(`http://localhost:8080/getAllQuestions`);
    setArray(response.data);
    console.log(response.data);
  }, []);
  return (
    <>
      <Usernavbar />
      <Sidebar />
      <div class="fluid-container ">
        <div class="row" style={{ height: "160vh" }}>
          <div class="col-md-1 bg-warning">One of three columns</div>
          <div class="col-md-10">
            <Datatable />
            {/* <div className="row mb-2 d-flex justify-content-end">
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
            <div className="row overflow-auto" style={{ height: "120vh" }}>
              <div>
                {array.map((item) => (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        {/* <Accordion.Header>{question.solution}</Accordion.Header> */}
            {/* <Accordion.Header>
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
            {/* </p>
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
                ))}
              </div>
            </div> */}
          </div>
          <div class="col-md-1 bg-primary"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AskQuestion;

// function AnswerQuestion() {
//   const [show, setShow] = useState(false);
//   const [target, setTarget] = useState(null);
//   const ref = useRef(null);

//   const handleClick = (event) => {
//     setShow(!show);
//     setTarget(event.target);
//   };

//   return (
//     <div ref={ref}>
//       <Button onClick={handleClick}>Holy guacamole!</Button>

//       <Overlay
//         show={show}
//         target={target}
//         placement="bottom"
//         container={ref}
//         containerPadding={20}
//       >
//         <Popover id="popover-contained">
//           <Popover.Header as="h3">Popover bottom</Popover.Header>
//           <Popover.Body>
//             <strong>Holy guacamole!</strong> Check this info.
//           </Popover.Body>
//         </Popover>
//       </Overlay>
//     </div>
//   );
// }

// //render(<Example />);
