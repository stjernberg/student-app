import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import people from "./people";
import { Wrapper, Card } from "./Styling";

const DataTable = () => {
  const studentList = people;
  const [showDetails, setShowDetails] = useState(false);
  const [student, setStudent] = useState(null);

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Birthdate</th>
          <th>Country</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableAction = (props) => {
    return (
      <Button type={props.type} variant={props.variant} onClick={props.onClick}>
        {props.text}
      </Button>
    );
  };

  const TableRow = () => {
    const studentDetails = (studentId) => {
      setStudent(studentList.find(({ id }) => id === studentId));
      setShowDetails(!showDetails);
    };

    return (
      <>
        <tbody>
          {studentList.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.birthDate}</td>
              <td>{person.country}</td>
              <td>{person.city}</td>
              <td>
                <TableAction
                  text="Details"
                  variant="info"
                  onClick={() => {
                    studentDetails(person.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  const Details = (props) => {
    return (
      <Card>
        <h2>Student info</h2>
        <p>
          <span>Name:</span> {student.firstName} {props.lastName}
        </p>
        <p>
          <span>Age:</span> {student.age}
        </p>
        <p>
          <span>Country:</span> {student.country}
        </p>
        <p>
          <span>City:</span> {student.city}
        </p>
        <TableAction
          variant="info"
          text="Hide"
          onClick={() => setShowDetails(!showDetails)}
        />
      </Card>
    );
  };

  return (
    <Wrapper>
      <Table striped bordered hover>
        <TableHeader />
        <TableRow />
      </Table>
      {showDetails && <Details />}
    </Wrapper>
  );
};

export default DataTable;
