import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Ai({children}) {
  return (
    <div className="navigated-content">
      <nav className="subject-navbar">
        <NavLink to="/program/course/subject/ai/introduction">Introduction</NavLink>
        <NavLink to="/program/course/subject/ai/objective">Objective</NavLink>
        <NavLink to="/program/course/subject/ai/experiment">List of Experiments</NavLink>
        <NavLink to="/program/course/subject/ai/ta">Target Audience</NavLink>
        {/* <NavLink to="aica">Course Alignment</NavLink>
        <NavLink to="aifeedback">Feedback</NavLink> */}
      </nav>
      
      {children}
    </div>
  );
}

export default Ai;
