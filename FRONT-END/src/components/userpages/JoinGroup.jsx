import React, { useEffect, useRef, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "./UserNav";
import { InputGroup, FormControl, Accordion } from "react-bootstrap";
import axios from "axios";
import Sidebar from "../Sidebar";
import Postanswer from "./PostAnswer";
import { Popover } from "bootstrap";

function JoinGroup() {
  let [array, setArray] = useState([]);
  useEffect(async () => {
    let response = await axios.get(`http://localhost:8080/getAllGroupsInfo`);
    setArray(response.data);
    console.log(response.data);
  }, []);
  return (
    <>
      <Usernavbar />
      <Sidebar />
      <div class="container ">
        <div class="row" style={{ height: "160vh" }}>
          <div class="col-md-12">
            <div className="row mb-2 d-flex justify-content-center">
              <div className="text-center fs-2 alert alert-success">
                Groups List
              </div>
            </div>
            <div className="row overflow-auto" style={{ height: "120vh" }}>
              <div>
                {array.map((item) => (
                  <div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="d-flex justify-content-between align-items-center w-100">
                            {item.groupName}
                            <button
                              className="btn btn-warning mx-4"
                              onClick={() => {
                                window.location = "/postGroup";
                                sessionStorage.setItem(
                                  "JoinGroup",
                                  item.jgroup
                                );
                                sessionStorage.setItem(
                                  "joingroupId",
                                  item.joingroupId
                                );
                              }}
                            >
                              Join Group
                            </button>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>{item.groupDesc}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default JoinGroup;
