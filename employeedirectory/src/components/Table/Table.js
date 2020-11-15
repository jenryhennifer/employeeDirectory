import React from 'react';
import './style.css';

function Table({ employees }) {
  
  return (
    <table>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Position</th>
        <th>Species</th>
        <th>Status</th>
      </tr>
      {employees.map((employee) => (
        <tr>
          <td>
            <img class="employeeID" src={employee.image}></img>
          </td>
          <td>{employee.name}</td>
          <td>{employee.position}</td>
          <td>{employee.species}</td>
          <td>{employee.status ? "Y":"N"  }</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
