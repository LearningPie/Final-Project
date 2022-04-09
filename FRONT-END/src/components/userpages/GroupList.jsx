import React, { useEffect, useRef, useState } from "react";
import Footer from "../layout/footer";
import Usernavbar from "./UserNav";
import axios from "axios";
import Sidebar from "../Sidebar";
import ViewGroup from "../ViewGroup";

function UserJoinedGroupsList() {
  let [array, setArray] = useState([]);
  useEffect(async () => {
    let response = await axios.get(
      `http://localhost:8080/getAllGroupInfoByUserId/${sessionStorage.getItem(
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
export default UserJoinedGroupsList;
