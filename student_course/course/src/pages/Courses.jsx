import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: 1,
      name: "React Development",
      description: "Learn React, components, hooks and routing."
    },
    {
      id: 2,
      name: "Java Programming",
      description: "Learn Java programming and object-oriented concepts."
    }
  ];

  return (
    <div className="page-container">

      <h1 className="page-title">Available Courses</h1>

      <p className="page-subtitle">
        Choose a course to view its details.
      </p>

      <div className="course-grid">

        {courses.map((course) => (
          <div className="course-card" key={course.id}>

            <div className="course-icon">
              📚
            </div>

            <h2>{course.name}</h2>

            <p>{course.description}</p>

            <Link
              to={`/course/${course.id}`}
              className="course-btn"
            >
              View Course
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Courses;