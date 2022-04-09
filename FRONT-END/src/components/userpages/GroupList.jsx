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
                  <div className="w-100 my-2" style={{ width: "1000px" }}>
                    {console.log(item)}
                    <div
                      className=" row justify-content-center align-items-center alert alert-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="col-md-2 justify-content-center align-items-center d-flex">
                        {/* <UserAvatar userName={groupInfo.groupName} /> */}
                      </div>

                      <div className="col-md-10 ">
                        <h5 className="text-align-left">{item.groupName}</h5>
                        <div>{item.groupDesc}</div>
                        <div className="text-align-right d-flex justify-content-end">
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              sessionStorage.setItem(
                                "joingroupId",
                                item.groupId
                              );
                              window.location = "/postJoinGroup";
                            }}
                          >
                            Go to group
                          </button>
                        </div>
                      </div>
                    </div>
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
