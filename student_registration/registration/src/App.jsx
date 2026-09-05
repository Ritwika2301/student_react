import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name,
      email,
      course
    });
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setCourse("");
    setStudent(null);
  };

  return (
    <div className="page">

      <div className="header">
        <div className="logo">🎓</div>
        <h1>Student Registration</h1>
        <p>Fill in the details below to register</p>
      </div>

      <div className="form-card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course</label>

            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Choose your course</option>
              <option value="B.Tech CSE">B.Tech CSE</option>
              <option value="B.Tech IT">B.Tech IT</option>
              <option value="B.Tech ECE">B.Tech ECE</option>
              <option value="B.Tech EEE">B.Tech EEE</option>
            </select>
          </div>

          <div className="buttons">
            <button type="submit" className="register-btn">
              Register Student
            </button>

            <button
              type="button"
              className="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>

        </form>
      </div>

      {student && (
        <div className="result-card">

          <div className="success-icon">✓</div>

          <h2>Registration Successful</h2>
          <p>Your details have been submitted successfully.</p>

          <div className="student-details">

            <div>
              <span>Name</span>
              <strong>{student.name}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{student.email}</strong>
            </div>

            <div>
              <span>Course</span>
              <strong>{student.course}</strong>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;