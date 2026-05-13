import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/editemployee.css";

function EditEmployee({ employees, setEmployees }) {

  const location = useLocation();

  const navigate = useNavigate();

  const employee = location.state;

  const [name, setName] = useState(employee.name);
  const [employeeId, setEmployeeId] =
    useState(employee.employeeId);
  const [department, setDepartment] =
    useState(employee.department);
  const [salary, setSalary] =
    useState(employee.salary);

  const handleUpdate = (e) => {

    e.preventDefault();

    const updatedEmployees = employees.map((emp) =>

      emp.id === employee.id
        ? {
            ...emp,
            name,
            employeeId,
            department,
            salary
          }
        : emp
    );

    setEmployees(updatedEmployees);

    alert("Employee Updated Successfully");

    navigate("/employeelist");
  };

  return (

    <div className="edit-container">

      <div className="edit-box">

        <h1>Edit Employee</h1>

        <form onSubmit={handleUpdate}>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            value={employeeId}
            onChange={(e) =>
              setEmployeeId(e.target.value)
            }
          />

          <input
            type="text"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          />

          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <button type="submit">
            Update Employee
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditEmployee;