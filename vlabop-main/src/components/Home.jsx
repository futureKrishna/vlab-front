import React from "react";
import { NavLink } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setLoginType, setSignupType} from '../rtk/api'

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupSelected, setSignupSelected] = useState("");
  const [loginSelected, setLoginSelected] = useState("");

  const signupChoosed = (e) => {
    dispatch(setSignupType(e.target.value));
    setSignupSelected(e.target.value);
  };

  const loginChoosed = (e) => {
    dispatch(setLoginType(e.target.value));
    setLoginSelected(e.target.value);
  };

  const signupType=localStorage.getItem("signuptype");

  console.log("signH",signupType)
  const loginOrNot= localStorage.getItem('isLoggedIn');

  useEffect(() => {
    if(signupSelected.length>0){
      localStorage.setItem("signuptype", signupSelected);
      navigate(`${signupSelected}`);
    }
  }, [signupSelected]);

  useEffect(() => {
    if(loginSelected.length>0){
      localStorage.setItem("logintype", loginSelected);
      navigate(`${loginSelected}`);
    }
  }, [loginSelected]);

  const logoutHandler=()=>{
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <nav className="home-nav">
        <img
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          src="https://tse1.mm.bing.net/th?id=OIP.rzVhD8gNbUFkHsS9fph7DAHaHa&pid=Api&P=0"
          alt="logo"
        />
        <h1
          style={{
            fontSize: "2rem",
            marginRight: "800px",
            color: "whiteSmoke",
          }}
        >
          Virtual Lab
        </h1>
        <NavLink to="about" onClick={() => navigate('about')}>About</NavLink>
        <select onChange={signupChoosed} className="home-select">
          <option>Signup</option>
          <option value="ssignup">Student</option>
          <option value="fsignup">Faculty</option>
        </select>
        {loginOrNot!=='true'?
        <select onChange={loginChoosed} className="home-select">
          <option>Login</option>
          <option value="slogin">Student</option>
          <option value="flogin">Faculty</option>
        </select>:<button onClick={logoutHandler} className="home-select">Logout</button>}
      </nav>
      <div className="homeimg">
        <img src="https://www.talentlms.com/blog/wp-content/uploads/2016/09/virtual-labs-in-elearning.png"/>
      </div>
    </div>
  );
}

export default Home;
