import React from 'react';
import './style.css';

function Table({ employees }) {
  const [sorted, setSorted] = React.useState(null);
  console.log(sorted)

  const sortedEmployees = sorted ? employees.concat().sort((a, b) => {
    const aval = a[sorted];
    const bval = b[sorted];
    if (aval < bval) {
      return -1;
    } else if (bval < aval) {
      return 1;
    } else {
      return 0;
    }
  }) : employees;
  console.log(sortedEmployees)

  return (
    <table>
      <tr>
        <th>
          <div>Image</div>
        </th>
        <th><div onClick={()=> setSorted('name')}>Name</div></th>
        <th><div onClick={()=> setSorted('position')}>Position</div></th>
        <th><div onClick={() => setSorted('species')}>Species</div></th>
        <th><div onClick={() => setSorted('status')}>Status</div></th>
      </tr>
      {sortedEmployees.map((employee) => (
        <tr key={employee.id}>
          <td>
            <img className="employeeID" src={employee.image}></img>
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
