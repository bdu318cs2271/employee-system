import { useState } from "react";
import axios from "axios";
import "../styles/addemployee.css";

function AddEmployee({ employees, setEmployees }) {

  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const newEmployee = {

      name: name,

      employee_id: employeeId,

      department: department,

      salary: Number(salary)

    };

    axios.post(
      "https://employee-system-1-e4bi.onrender.com/api/add/",
      newEmployee
    )

    .then((response) => {

      alert("Employee Added Successfully 🚀");

      // 🔥 update list immediately
      setEmployees((prev) => [...prev, response.data]);

      console.log(response.data);

      // clear form
      setName("");
      setEmployeeId("");
      setDepartment("");
      setSalary("");

    })

    .catch((error) => {

      console.log(error);
      alert("Error adding employee ❌");

    });

  };

  return (

    <div className="add-container">

      <div className="add-box">

        <h1>Add Employee</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />

          <button type="submit">
            Add Employee
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddEmployee;