import React from "react";
import { useStudent } from "../context/StudentContext";

function About() {
  const student = useStudent();

  return (
    <div className="page-container">

      <div className="about-card">

        <div className="course-icon">
          📖
        </div>

        <h1>About Student Portal</h1>

        <p>
          Student Portal is a simple course management application
          built using React.
        </p>

        <p>
          It uses React Router for navigation and Context API
          for sharing student information between components.
        </p>

        <div className="about-info">
          <strong>Current Student</strong>
          <span>{student.name}</span>
        </div>

      </div>

    </div>
  );
}

export default About;