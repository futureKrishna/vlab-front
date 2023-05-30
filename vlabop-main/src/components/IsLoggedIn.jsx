import React from "react";
import { Navigate } from "react-router-dom";

function IsLoggedIn({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn === true ? children : <Navigate to="/login" />;
}

export default IsLoggedIn;
