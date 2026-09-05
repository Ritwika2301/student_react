import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/HomeTemp";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
            </>
          }
        />

        {/* Dynamic Course */}
        <Route
          path="/course/:id"
          element={
            <>
              <Navbar />
              <CourseDetails />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;