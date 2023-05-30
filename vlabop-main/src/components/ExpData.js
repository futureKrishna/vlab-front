import { Link,Outlet } from "react-router-dom";
import Ai from "../program/subject/Ai/Ai";
import { useSelector } from "react-redux";

function ExpData({children}) {
  const { currentExp } = useSelector((state) => state.expid);
  return (
    <Ai>
    <div>
      <nav>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/program/course/subject/ai/experiment/${currentExp}/aim`}>Aim</Link>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}}to={`/program/course/subject/ai/experiment/${currentExp}/theory`}>Theory</Link>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/program/course/subject/ai/experiment/${currentExp}/procedure`}>Procedure</Link>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/program/course/subject/ai/experiment/${currentExp}/observation`}>Observation</Link>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/program/course/subject/ai/experiment/${currentExp}/assignment`}>Assignment</Link>
        <Link style={{margin:"20px",textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/program/course/subject/ai/experiment/${currentExp}/reference`}>Reference</Link>
      </nav>
      {/* <Outlet/> */}
      {children}
    </div>
    </Ai>
  );
}

export default ExpData