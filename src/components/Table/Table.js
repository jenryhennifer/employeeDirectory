import React from 'react';
import './style.css';

function Table({ employees }) {
  const [sorted, setSorted] = React.useState(null);

  const [search, setSearch] = React.useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const searchEmployee = employees.filter((emp) => emp.name.includes(search));

  console.log(searchEmployee);

  const sortedEmployees = sorted
    ? searchEmployee.concat().sort((a, b) => {
        const aval = a[sorted];
        const bval = b[sorted];
        if (aval < bval) {
          return -1;
        } else if (bval < aval) {
          return 1;
        } else {
          return 0;
        }
      })
    : searchEmployee;

  return (
    <div>
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <table>
        <tr>
          <th>
            <div>Image</div>
          </th>
          <th>
            <div onClick={() => setSorted('name')}>Name</div>
          </th>
          <th>
            <div onClick={() => setSorted('position')}>Position</div>
          </th>
          <th>
            <div onClick={() => setSorted('species')}>Species</div>
          </th>
          <th>
            <div onClick={() => setSorted('status')}>Status</div>
          </th>
        </tr>
        {sortedEmployees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img className="employeeID" src={employee.image}></img>
            </td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.species}</td>
            <td>
              {employee.status ? (
                <div className="current">Current</div>
              ) : (
                <div className='former'>Former</div>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
