import React from "react";
import TableAction from "./TableAction";

const TableRow = (props) => {
  return (
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
          <td className="text-center">
            <TableAction type="submit" text="details" variant="info" />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
