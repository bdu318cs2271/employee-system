import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-container">

      {/* Sidebar */}

      <div className="sidebar">

        <h2>EMS</h2>

        <ul>

          <li>Dashboard</li>

          <li onClick={() => navigate("/addemployee")}>
            Add Employee
          </li>

          <li onClick={() => navigate("/employeelist")}>
            Employee List
          </li>

          <li>Logout</li>

        </ul>

      </div>

      {/* Main Content */}

      <div className="main-content">

        <h1>Welcome Admin 👋</h1>

        <p>Employee Management System Dashboard</p>

        {/* Slider */}

        <div className="slider">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="office"
          />

        </div>

        {/* Cards */}

        <div className="card-container">

          <div className="card">
            <h2>120</h2>
            <p>Total Employees</p>
          </div>

          <div className="card">
            <h2>10</h2>
            <p>Departments</p>
          </div>

          <div className="card">
            <h2>15</h2>
            <p>New Joiners</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;