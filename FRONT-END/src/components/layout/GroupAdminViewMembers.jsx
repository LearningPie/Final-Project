import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

export default function UserCard(prop) {
  const [dataList, setDataList] = useState(prop.list);
  const [filteredDataList, setFilteredDataList] = useState(prop.list);
  const [search, setSearch] = useState("");
  console.log(prop.list);
  const deleteUser = (arre) => {
    let delArr = [];
    arre.map((item) => delArr.push(item.userId));
    axios.post(`http://localhost:8080/deleteusers`, delArr).then(
      (response) => {
        console.log(response.data);
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
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(arr);
        Swal.fire("Deleted!", "User has been Deleted", "success").then(
          function () {
            window.location = "/adminHome";
          }
        );
      }
    });
  };

  let arr = [];
  useEffect(() => {
    const result = dataList.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredDataList(result);
  }, [search]);

  let column = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "User Name",
      selector: (row) => row.userName,
    },
    {
      name: "Phone No",
      selector: (row) => row.phoneNo,
    },
    {
      name: "Email Id",
      selector: (row) => row.email,
    },
    {
      name: "Admin",
      selector: (row) => (row.status == true ? "Yes" : "No"),
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button
    //       className="btn btn-outline-danger btn-sm badge-pill"
    //       onClick={handleDelete}
    //     >
    //       Delete
    //     </button>
    //   ),
    // },
  ];
  return (
    <>
      <div style={{ height: "80vh" }}>
        <DataTable
          title="User List"
          columns={column}
          data={filteredDataList}
          pagination
          fixedHeader
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={(state) => {
            console.log(state);
            arr = state.selectedRows;
          }}
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search user here..."
              value={search}
              onChange={(e) => setU(e.target.value)}
            />
          }
          subHeaderAlign="right"
        ></DataTable>
        <button
          className="btn btn-outline-danger btn-sm badge-pill"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
}
