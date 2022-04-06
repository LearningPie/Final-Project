import axios from "axios";
import React from "react";
import UserAvatar from "./userpages/userAvatar";

function ViewGroup(groupInfo) {
  function registerUser() {
    let groupDto = {
      userId: sessionStorage.getItem("userId"),
      groupId: sessionStorage.getItem("joingroupId"),
    };
    const response = axios.post(`http://localhost:8080/joinGroup`, groupDto);
  }
  return (
    <div className="w-100 my-2">
      <div
        className=" row justify-content-center align-items-center alert alert-primary"
        style={{ borderRadius: "20px" }}
      >
        <div className="col-md-2 justify-content-center align-items-center d-flex">
          <UserAvatar userName={groupInfo.groupName} />
        </div>
        <div className="col-md-10 ">
          <h5 className="text-align-left">{groupInfo.groupName}</h5>
          <div>{groupInfo.desc}</div>
          <div className="text-align-right d-flex justify-content-end">
            <button
              className="btn btn-warning"
              onClick={() => {
                sessionStorage.setItem("joingroupId", groupInfo.groupId);
                registerUser();
                window.location = "/postJoinGroup";
              }}
            >
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewGroup;
