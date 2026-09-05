import React from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function Navbar() {
  const student = useStudent();

  return (
    <nav className="navbar">

      <div className="brand">
        🎓 Student Portal
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>

      <div className="student-name">
        {student.name}
      </div>

    </nav>
  );
}

export default Navbar;