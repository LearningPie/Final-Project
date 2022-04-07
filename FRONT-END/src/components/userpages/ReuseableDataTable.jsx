import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import DataTable from "react-data-table-component";
import UserAvatar from "./userAvatar";
import UserComp from "./UserComp";

export default function Dataset(prop) {
  const [dataList, setDataList] = useState(prop.list);
  // setDataList(prop.list);
  // console.log(dataList);
  const [search, setSearch] = useState("");
  const [filteredDataList, setFilteredDataList] = useState(prop.list);
  // setFilteredDataList(prop.list);
  // useEffect(() => {}, []);
  useEffect(() => {
    const result = dataList.filter((que) => {
      return que.userName.toLowerCase().match(search.toLowerCase());
    });
    setFilteredDataList(result);
  }, [search]);

  const column = [
    {
      // name: <h5>{prop.columnName}</h5>,
      width: "800px",

      selector: (row) => (
        <div>
          <UserComp userName={row.userName}></UserComp>
        </div>
      ),

      sortable: true,
    },
  ];
  return (
    <div style={{ height: "80vh" }} className="overflow-auto">
      <DataTable
        columns={column}
        data={filteredDataList}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="144vh"
        //selectableRows
        selectableRowsHighlight
        //highlightOnHover
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
  );
}
