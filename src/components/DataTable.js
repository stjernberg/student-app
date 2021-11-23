import React, { useState } from "react";
import { Table } from "react-bootstrap";
import people from "../people";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = () => {
  const [studentList, setStudentList] = useState(people);
  return (
    <>
      <Table striped bordered hover>
        <TableHeader />
        <TableRow people={studentList} />
      </Table>
    </>
  );
};

export default DataTable;
