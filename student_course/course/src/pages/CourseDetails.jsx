import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: {
      name: "React Development",
      description:
        "Learn React components, props, state, hooks, routing and Context API.",
      duration: "6 Weeks"
    },

    2: {
      name: "Java Programming",
      description:
        "Learn Java fundamentals, OOP concepts, collections and exception handling.",
      duration: "8 Weeks"
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="page-container">
        <div className="not-found">
          <h1>Course Not Found</h1>
          <p>The requested course does not exist.</p>

          <Link to="/courses" className="primary-btn">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">

      <div className="details-card">

        <div className="course-icon large">
          📚
        </div>

        <h1>{course.name}</h1>

        <p>{course.description}</p>

        <div className="duration">
          <strong>Duration:</strong> {course.duration}
        </div>

        <Link to="/courses" className="primary-btn">
          ← Back to Courses
        </Link>

      </div>

    </div>
  );
}

export default CourseDetails;