import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import UserAvatar from "./userpages/userAvatar";

function ViewGroup(groupInfo) {
  function registerUser() {
    let groupDto = {
      userId: sessionStorage.getItem("userId"),
      groupId: sessionStorage.getItem("joingroupId"),
    };
    axios.post(`http://localhost:8080/joinGroup`, groupDto).then(
      (response) => {
        //console.log(response);
        if (groupInfo.admin == sessionStorage.getItem("userId")) {
          window.location = "/adminHome";
        } else if (groupInfo.admin != sessionStorage.getItem("userId")) {
          window.location = "/postJoinGroup";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oh no!!!",
          });
        }
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  }

  function checkPass() {
    var pass = prompt("Please enter group password ", "");
    if (pass == null) {
      Swal.fire("You Pressed Cancel. You chose not to answer this question.");
    } else {
      if (pass == groupInfo.groupPass) {
        registerUser();
      } else {
        Swal.fire("Sorry, please check your password");
      }
    }
  }
  return (
    <>
      <div className="w-100 my-2" style={{ width: "1000px" }}>
        <div
          className=" row justify-content-center align-items-center alert alert-primary"
          style={{ borderRadius: "20px" }}
        >
          <div className="col-md-2 justify-content-center align-items-center d-flex">
            {/* <UserAvatar userName={groupInfo.groupName} /> */}
          </div>

          <div className="col-md-10 ">
            <h5 className="text-align-left">{groupInfo.groupName}</h5>
            <div>{groupInfo.desc}</div>
            <div className="text-align-right d-flex justify-content-end">
              <button
                className="btn btn-warning"
                onClick={() => {
                  sessionStorage.setItem("joingroupId", groupInfo.groupId);
                  checkPass();
                }}
              >
                Join Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewGroup;
