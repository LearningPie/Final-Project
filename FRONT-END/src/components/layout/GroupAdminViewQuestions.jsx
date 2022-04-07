import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

export default function AdminViewQuestions(prop) {
  const [questions, setQuestions] = useState(prop.list);
  const [search, setSearch] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(prop.list);

  let deletedRows = [{}];

  const printRowDeleted = () => {
    console.log(deletedRows);
    let deletedRowsList = [];
    deletedRows.map((item) => {
      // console.log(item.questionId);
      deletedRowsList.push(item.questionId);
    });

    deleteFunction(deletedRowsList);
    console.log(deletedRowsList);
  };
  const deleteFunction = async (data) => {
    console.log(data);
    const response = await axios.post(
      `http://localhost:8080/deleteQuestions`,
      data
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
        printRowDeleted();
        Swal.fire("Deleted!", "User has been Deleted", "success").then(
          function () {
            window.location = "/adminHome";
          }
        );
      }
    });
  };

  useEffect(() => {
    const result = questions.filter((que) => {
      return que.question.toLowerCase().match(search.toLowerCase());
    });
    setFilteredQuestions(result);
  }, [search]);

  const column = [
    {
      name: <h5>Questions</h5>,
      selector: (row) => <div style={{ fontSize: "16px" }}>{row.question}</div>,

      sortable: true,
    },
  ];
  return (
    <>
      <div style={{ height: "80vh" }}>
        <DataTable
          title="Questions"
          columns={column}
          data={filteredQuestions}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="144vh"
          selectableRows
          selectableRowsHighlight
          // contextActions={contextActions}
          onSelectedRowsChange={(state) => {
            deletedRows = state.selectedRows;
          }}
          subHeader
          subHeaderComponent={
            <input
              className="form-control w-50"
              placeholder="Search Question Here...."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          }
          //theme="dark"
          subHeaderAlign="right"
        />
        <div>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
