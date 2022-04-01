import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import axios from "axios";
import base_url from "../../api/bootapi";
import AdminNav from "./AdminNav";

function Adminusers() {
  // useEffect(() => {
  //   document.title = "Users List";
  //   if (sessionStorage.getItem("admin") != "admin") {
  //     window.location = "/";
  //   }
  //   viewUsers();
  // }, []);

  const viewUsers = () => {
    axios.get(`${base_url}/getallusers`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "Admin",
            text: "There are no users registered",
            icon: "error",
            button: "Ok",
          });
        }
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire("Server is down");
      }
    );
  };

  const [users, setUsers] = useState([]);

  const deleteUser = () => {
    axios.delete(`${base_url}/deleteuser/${users.userId}`).then(
      (response) => {
        //console.log(response);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this user?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser();
          swal
            .fire("Deleted!", "User has been Deleted", "success")
            .then(function () {
              window.location = "/userlist";
            });
        }
      });
  };

  console.log(users);
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      <div class="min-vh-100 mt-5 bgimg">
        <div class="container mt-5 pt-5">
          <h1 className=" mb-3 text-center text-white fw-bold">
            View All Users
          </h1>
          <div class="card">
            <h5 class="card-header">All Users</h5>
            <div class="card-body">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Phone_No</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Admin</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.email}</td>
                        <td>{user.status == true ? "Yes" : "No"}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm badge-pill"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h2 className="text-center m-5 p-5">No users registered</h2>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminusers;
