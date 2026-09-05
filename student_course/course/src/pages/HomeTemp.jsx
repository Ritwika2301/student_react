import React from "react";
import { Link } from "react-router-dom";
import { useStudent } from "../context/StudentContext";

function Home() {
  const student = useStudent();

  return (
    <div className="page-container">

      <section className="hero">

        <div className="hero-icon">🎓</div>

        <h1>Welcome, {student.name}!</h1>

        <p>
          Explore courses and manage your learning journey.
        </p>

        <Link to="/courses" className="primary-btn">
          Explore Courses
        </Link>

      </section>

      <section className="student-card">

        <h2>Student Information</h2>

        <div className="info-row">
          <span>Name</span>
          <strong>{student.name}</strong>
        </div>

        <div className="info-row">
          <span>Course</span>
          <strong>{student.course}</strong>
        </div>

        <div className="info-row">
          <span>College</span>
          <strong>{student.college}</strong>
        </div>

      </section>

    </div>
  );
}

export default Home;