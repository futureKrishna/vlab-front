import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Python({children}) {
  return (
    <div className="navigated-content">
      <nav className="subject-navbar">
        <NavLink to="/program/course/subject/py/introduction">Introduction</NavLink>
        <NavLink to="/program/course/subject/py/objective">Objective</NavLink>
        <NavLink to="/program/course/subject/py/experiment">List of Experiments</NavLink>
        <NavLink to="/program/course/subject/py/ta">Target Audience</NavLink>
        {/* <NavLink to="pyca">Course Alignment</NavLink>
        <NavLink to="pyfeedback">Feedback</NavLink> */}
      </nav>
      {children}
    </div>
  );
}

export default Python;
