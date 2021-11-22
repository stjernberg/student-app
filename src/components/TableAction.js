import React from "react";
import { Button } from "react-bootstrap";

const TableAction = (props) => {
  return (
    <>
      <Button
        type={props.type}
        onClick={props.handleClick}
        variant={props.variant}
        className={`myButton ${props.color}`}
      >
        {props.text}
      </Button>
    </>
  );
};

export default TableAction;
