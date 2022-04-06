import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import DataTable from "react-data-table-component";

export default function AdminViewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  let deletedRows = [{}];
  let deletedRowsList = [];
  const printRowDeleted = () => {
    console.log(deletedRows);
    deletedRows.map((item) => {
      // console.log(item.questionId);
      deletedRowsList.push(item.questionId);
    });

    //deleteFunction(deletedRowsList);
    console.log(deletedRowsList);
  };
  const deleteFunction = (data) => {
    // const response = await axios.get(
    //   `http://localhost:8080/deleteQuestion/${data}`
    console.log(
      data.map((item) => {
        item.questionId;
      })
    );
    // );
  };
  //const deleteRows = ({ selectedRows }) => {};

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered

  const getQuestions = async () => {
    const response = await axios.get("http://localhost:8080/getAllQuestions");
    setQuestions(response.data);
    setFilteredQuestions(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    const result = questions.filter((que) => {
      return que.question.toLowerCase().match(search.toLowerCase());
    });
    setFilteredQuestions(result);
  }, [search]);

  const column = [
    {
      name: <h5>Questions</h5>,
      selector: (row) => (
        // <div style={{ fontSize: "16px" }}>{row.question}</div>

        <div>
          <Accordion style={{ width: "1200px" }}>
            <Accordion.Item eventKey="0">
              {/* <Accordion.Header>{question.solution}</Accordion.Header> */}
              <Accordion.Header>
                <div className="d-flex justify-content-between align-items-center w-100">
                  {row.question}
                  <button
                    className="btn btn-warning mx-4"
                    onClick={() => {
                      deleteRow(row.questionId);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {row.answerList.length > 0 ? (
                  row.answerList.map((item) => (
                    <div>
                      <div
                        class="card mb-2 text-light"
                        style={{ backgroundColor: "#3f51b5" }}
                      >
                        <div class="row g-0">
                          <div class="col-md-2 d-flex justify-content-center align-items-center   ">
                            {/* <UserAvatar userName={item.user.name} /> */}
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <h5 class="card-title">{item.user.userName}</h5>
                              <p class="card-text">{item.answer}</p>
                              <p class="card-text">
                                {/* <button className="btn btn-primary">
                          Like
                        </button>
                        &nbsp;{" "}
                        <button className="btn btn-primary">
                          Dislike
                        </button> */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No Answers Yet</div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ),

      sortable: true,
    },
    // {
    //   name: <h5>Action</h5>,
    //   cell: (row) => (
    //     <button
    //       className="btn btn-warning btn-sm "
    //       onClick={() => {
    //         window.location = "/postanswer";
    //         sessionStorage.setItem("questionId", row.questionId);
    //         sessionStorage.setItem("question", row.question);
    //       }}
    //     >
    //       Answer
    //     </button>
    //   ),
    // },
    // {
    //   name: <div>Action</div>,
    //   cell: (row) => (
    //     <button
    //       className="btn btn-warning btn-sm "
    //       onClick={() => {
    //         window.location = "/postanswer";
    //         sessionStorage.setItem("questionId", row.questionId);
    //         sessionStorage.setItem("question", row.question);
    //       }}
    //     >
    //       View Answers
    //     </button>
    //   ),
    // },
  ];
  return (
    <>
      <DataTable
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
          // state.selectedRows.map((item) => {
          //   //console.log(item);
          //   // printRows();
          //   // console.log("Hello");
          //   //  deletedQuestion = item.questionId;
          // });
        }}
        // clearSelectedRows={toggleCleared}
        //highlightOnHover

        //clearSelectedRows={toggledClearRows}
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
        <button className="btn btn-danger" onClick={printRowDeleted}>
          Delete
        </button>
      </div>
    </>
  );
}
