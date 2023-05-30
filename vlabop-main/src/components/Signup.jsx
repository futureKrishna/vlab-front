import { useState, useEffect,useRef} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { setLoginType } from "../rtk/api";
import { useDispatch } from "react-redux";
import { setStudentName } from "../rtk/dashboard";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const dispatch=useDispatch();
  const nameInput= useRef();
  const emailInput = useRef();
  const pwdInput = useRef();

  const {signupType}=useSelector((state)=>state.api)
  // const signupType=localStorage.getItem("signuptype");
  const navigate=useNavigate()

  const nameHandler=(e)=>{
    setName(e.target.value);
    dispatch(setStudentName(e.target.value))
    nameInput.current.focus();
  }
  const emailHandler=(e)=>{
    setEmail(e.target.value);
    emailInput.current.focus();
  }
  const pwdHandler=(e)=>{
    setPwd(e.target.value);
    pwdInput.current.focus();
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const resp = await axios.post(
      `http://localhost:3000/${signupType}`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    setName("");
    setEmail("");
    setPwd("");
    if(signupType==="ssignup"){
      dispatch(setLoginType('slogin'));
      navigate('/slogin');
    }
    else if(signupType==="fsignup"){
      dispatch(setLoginType('flogin'));
      navigate('/flogin')
    }
  };


  return (
    <Layout>
    <div className="main-signup-div">
      {signupType==="ssignup"?<h3>Student Signup</h3>:<h3>Faculty Signup</h3>}
      <div className="signup-div">
        <form className="signup-form" onSubmit={submitHandler}>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            ref={nameInput}
            onChange={nameHandler}
          />
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            ref={emailInput}
            onChange={emailHandler}
          />
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            ref={pwdInput}
            onChange={pwdHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default Signup;
