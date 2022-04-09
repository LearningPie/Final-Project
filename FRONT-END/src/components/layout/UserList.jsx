import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AdminNav from "./AdminNav";
import Footer from "./footer";
import UserListCard from "./UserListCard";
export default function Users() {
  useEffect(() => {
    // document.title = "Users List";
    // if (sessionStorage.getItem("admin") != "admin") {
    //   window.location = "/";
    // }
    viewUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterU, setFilterU] = useState("");

  const viewUsers = async () => {
    await axios.get(`http://localhost:8080/getallusers`).then(
      (response) => {
        console.log(response.data);
        // if (response.data.length == 0) {
        //   Swal.fire({
        //     title: "Admin",
        //     text: "There are no users registered",
        //     icon: "error",
        //     button: "Ok",
        //   });
        //}
        setUsers(response.data);
        setFilterU(response.data);
      },
      (error) => {
        console.log(error);
        Swal.fire("Server is down");
      }
    );
  };

  return (
    <div>
      <div className="mb-5">
        <AdminNav />
      </div>
      <div className="mt-5" style={{ height: "100vh" }}>
        {users.length > 0 ? (
          <UserListCard user={users} />
        ) : (
          <h2 className="text-center m-5 p-5">No users registered</h2>
        )}

        {/* <UserListCard userSearch={filterU} /> */}
      </div>
      <Footer />
    </div>
  );
}
