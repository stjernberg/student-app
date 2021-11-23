import React from "react";
import styled from "styled-components/macro";
import { Button } from "react-bootstrap";

const Details = (props) => {
  return (
    <Card>
      <h2>Student info</h2>
      <p>
        <span>Name:</span> {props.firstName} {props.lastName}
      </p>
      <p>
        <span>Age:</span> {props.age}
      </p>
      <p>
        <span>Country:</span> {props.country}
      </p>
      <p>
        <span>City:</span> {props.city}
      </p>
      <Button
        variant="info"
        onClick={() => props.setShowDetails(!props.showDetails)}
      >
        Hide
      </Button>
    </Card>
  );
};

const Card = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  margin: auto;
  align-self: center;

  span {
    font-weight: bold;
  }

  .btn {
    background: #5bc0de;
    color: #fff;
  }
`;

export default Details;
