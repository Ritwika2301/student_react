import React, { createContext, useContext } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const student = {
    name: "Ritwika",
    course: "B.Tech CSE",
    college: "GIET University"
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}