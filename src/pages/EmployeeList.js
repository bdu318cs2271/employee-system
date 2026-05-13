import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/table.css";

function EmployeeList({ employees, setEmployees }) {

  const navigate = useNavigate();

  // 🔥 GET DATA FROM DJANGO BACKEND
  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/employees/")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [setEmployees]);

  // 🔥 BACKEND DELETE (IMPORTANT FIX)
  const handleDelete = (id) => {

    axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
      .then(() => {

        // remove from UI also
        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);

      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>Employee List</h1>

      <table className="emp-table">

        <thead>

          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.name}</td>
              <td>{emp.employee_id}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>

              <td>

                <button
                  onClick={() =>
                    navigate("/editemployee", {
                      state: emp
                    })
                  }
                >
                  Edit
                </button>

                {" "}

                <button
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;