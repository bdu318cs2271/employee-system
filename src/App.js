import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";

function App() {

  const [employees, setEmployees] = useState([]);

  return (

    <HashRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/addemployee"
          element={
            <AddEmployee
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        <Route
          path="/employeelist"
          element={
            <EmployeeList
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

        <Route
          path="/editemployee"
          element={
            <EditEmployee
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />

      </Routes>

    </HashRouter>
  );
}

export default App;