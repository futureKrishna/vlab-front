import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import "../styles/dashboard.css";

function Dashboard() {
  const { loginType } = useSelector((state) => state.api);
  const { studentName, facultyName } = useSelector((state) => state.names);

  return (
    <Layout>
      <div className="dashboard_container">
        {loginType === "flogin" ? (
          <div>
            <h1 className="welcome_message">Welcome! {facultyName}</h1>
            <h2>
              You can explore all the programs -
              <button
                style={{
                  color: "grey",
                  backgroundColor: "green",
                  height: "40px",
                  width: "100px",
                  borderRadius: "5px",
                }}
              >
                <Link to="/program" className="program-link">
                  Click Here
                </Link>
              </button>
            </h2>
          </div>
        ) : (
          <div>
            <h1 className="welcome_message">Welcome! {studentName} </h1>
            <p
              style={{
                maxWidth: "500px",
                marginBottom: "20px",
                fontSize: "25px",
              }}
            >
              Welcome to the Virtual Lab for B.Tech Computer Students! This
              platform is designed to enhance your learning experience and
              provide practical hands-on exercises in various computer science
              concepts. Explore the lab modules below to get started.
            </p>
            <h4
              style={{ marginBottom: "20px", fontSize: "25px" }}
              className="program_link"
            >
              Select the program -
              <button
                style={{
                  color: "grey",
                  border: "2px solid green",
                  backgroundColor: "beige",
                  height: "40px",
                  width: "100px",
                  borderRadius: "5px",
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/program">
                  Click Here
                </Link>
              </button>
            </h4>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
