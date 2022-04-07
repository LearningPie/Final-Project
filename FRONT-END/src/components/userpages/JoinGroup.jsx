import React, { useEffect, useRef, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "./UserNav";
import { InputGroup, FormControl, Accordion } from "react-bootstrap";
import axios from "axios";
import Sidebar from "../Sidebar";
import Postanswer from "./PostAnswer";
import { Popover } from "bootstrap";
import ViewGroup from "../ViewGroup";
import ReuseableListDataTable from "./ReuseableListDataTable";

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
        <div class="row justify-content-center" style={{ height: "160vh" }}>
          <div class="col-md-8">
            <div className="row mb-2 d-flex justify-content-center">
              <span className="text-center fs-2 alert alert-success">
                Groups List
              </span>
            </div>
            <div
              className="row overflow-auto justify-content-center"
              style={{ height: "120vh" }}
            >
              <div>
                {array.map((item) => (
                  <div>
                    <ViewGroup
                      groupName={item.groupName}
                      desc={item.groupDesc}
                      groupId={item.groupId}
                      groupPass={item.groupPassword}
                      admin={item.admin}
                    ></ViewGroup>
                  </div>
                ))}
                {/* <ReuseableListDataTable list={array}></ReuseableListDataTable> */}
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
