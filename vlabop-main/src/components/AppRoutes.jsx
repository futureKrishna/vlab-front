import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Signup from "./Signup";
// import Admin from "../roleBrouting/Admin";
import Login from "./Login";
import Course from "../program/Course";
import Program from "../program/Program";
import AiRoutes from "../program/subject/AiRoutes";
import PythonRoutes from "../program/subject/PythonRoutes";
import PsRoutes from "../program/subject/PsRoutes";
import EDataRoute from "../program/subject/EDataRoute";
import DsRoutes from "../program/subject/DsRoutes";
import Subject from "../program/Subject";
import Dashboard from "./Dashboard";

function AppRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/slogin" element={<Login />} />
        <Route path="/flogin" element={<Login />} />
        <Route path="/ssignup" element={<Signup />} />
        <Route path="/fsignup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/program" element={<Program />}/>
        <Route path="/program/course" element={<Course />}/>
        <Route path="/program/course/subject" element={<Subject />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
      </Routes>
        <PsRoutes />
        <AiRoutes />
        <DsRoutes/>
        <PythonRoutes />
        <EDataRoute />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
