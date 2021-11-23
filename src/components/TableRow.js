import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components/macro";

// import TableAction from "./TableAction";
import Details from "./Details";

const TableRow = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [student, setStudent] = useState({});

  const studentDetails = (studentId) => {
    setStudent(props.people.find(({ id }) => id === studentId));
    setShowDetails(!showDetails);
  };

  return (
    <>
      <tbody>
        {props.people.map((person) => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>{person.birthDate}</td>
            <td>{person.country}</td>
            <td>{person.city}</td>
            <td>
              {/* <TableAction
                text="Details"
                variant="info"
                onClick={() => {
                  studentDetails(person.id);
                }}
              /> */}
              <Button
                variant="outline-info"
                onClick={() => {
                  studentDetails(person.id);
                }}
              >
                Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <CardWrapper>
        {showDetails && (
          <Details
            {...student}
            setShowDetails={setShowDetails}
            showDetails={showDetails}
          />
        )}
      </CardWrapper>
    </>
  );
};

const CardWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default TableRow;
