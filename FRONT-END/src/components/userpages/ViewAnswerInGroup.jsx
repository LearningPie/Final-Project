import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import UserNav from "./UserNav";
import Footer from "../layout/footer";

export default function ViewAnswerInGroup(prop) {
  const [dataList, setDataList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredDataList, setFilteredDataList] = useState([]);
  // useEffect(async () => {
  //   setFilteredDataList(prop.list);
  //   setDataList(prop.list);
  // }, []);
  //   useEffect(() => {
  //     const result = dataList.filter((que) => {
  //       return que.question.toLowerCase().match(search.toLowerCase());
  //     });
  //     setFilteredDataList(result);
  //   }, [search]);
  useEffect(async () => {
    console.log(sessionStorage.getItem("questionId"));
    let response = await axios.get(
      `http://localhost:8080/getAnswersByQuestionsId/${sessionStorage.getItem(
        "questionId"
      )}`
    );
    console.log(response.data);
    setDataList(response.data);
    setFilteredDataList(response.data);
  }, []);

  const column = [
    {
      name: <h4>Answers</h4>,

      selector: (row) => <h6>{row.answer}</h6>,

      sortable: true,
    },
    {
      name: <h4>User</h4>,

      selector: (row) => <h6>{row.user.userName}</h6>,

      sortable: true,
    },
  ];
  return (
    <div>
      <UserNav></UserNav>

      <div style={{ height: "120vh" }} className="overflow-auto container mt-5">
        <h4 className="alert alert-primary">
          Question&nbsp;:&nbsp;
          {sessionStorage.getItem("groupQuestion")}
        </h4>
        <DataTable
          columns={column}
          data={filteredDataList}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="144vh"
          //selectableRows
          selectableRowsHighlight
          highlightOnHover
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
      </div>
      <Footer></Footer>
    </div>
  );
}
