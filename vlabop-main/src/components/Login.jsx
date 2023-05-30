import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
// import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loginType}=useSelector((state)=>state.api)

  const navigate = useNavigate();

  const userHandler = (e) => {
    setEmail(e.target.value);
  };

  const pwdHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const res=await fetch(`http://localhost:3000/${loginType}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    if(res.status===401){
      window.alert("Invalid Credential")
    }
    else{
      localStorage.setItem("isLoggedIn", "true");
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
    <Layout>
    <div className="login">
      {loginType==='slogin'?<h3>Student Login</h3>:<h3>Faculty Login</h3>}
      <form onSubmit={submitHandler} className="formc">
        <label className="clabel">Email :
          <input
            placeholder="Enter Username"
            onChange={userHandler}
            type="email"
            value={email}
            required
          />
        </label>
        <label className="clabel">Password :
          <input
            placeholder="Enter Password"
            onChange={pwdHandler}
            type="password"
            value={password}
            required
          />
        </label>
        {/* <ReCAPTCHA
sitekey="6Lc0t8IkAAAAAKA4EKOpR8ChwC51FPi9FIH0V_s8" className="recap"
onChange={onChange} */}
/>
        <button type="submit" className="sub">Submit</button>
      </form>
    </div>
    </Layout>
  );
}

export default Login;
