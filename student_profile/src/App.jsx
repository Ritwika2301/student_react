import React from "react";
import "./App.css";

function Student({ name, course, college }) {
  return (
    <div className="student-card">
      <div className="profile-circle">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>

      <div className="info">
        <p>
          <strong>Course</strong>
          <span>{course}</span>
        </p>

        <p>
          <strong>College</strong>
          <span>{college}</span>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Student Profiles</h1>
      <p className="subtitle">Student Information</p>

      <div className="students">
        <Student
          name="Ritwika"
          course="B.Tech CSE"
          college="GIET University"
        />

        <Student
          name="Rahul"
          course="B.Tech IT"
          college="GIET University"
        />
      </div>
    </div>
  );
}

export default App;