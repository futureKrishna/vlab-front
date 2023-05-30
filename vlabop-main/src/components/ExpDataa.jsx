import { useSelector } from "react-redux";
import ExpData from "./ExpData";

export function Aim() {
  const { expById } = useSelector((state) => state.expid);
  console.log('op',expById)
  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["aim"]}
    </div>
    </ExpData>
  );
}

export function Theory() {
  const { expById } = useSelector((state) => state.expid);
  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["theory"]}
    </div>
    </ExpData>
  );
}

export function Procedure() {
  const { expById } = useSelector((state) => state.expid);

  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["procedure"]}
    </div>
    </ExpData>
  );
}

export function Observation() {
  const { expById } = useSelector((state) => state.expid);

  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["observation"]}
    </div>
    </ExpData>
  );
}

export function Assignment() {
  const { expById } = useSelector((state) => state.expid);

  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["assignment"]}
    </div>
    </ExpData>
  );
}

export function Reference() {
  const { expById } = useSelector((state) => state.expid);

  return (
    <ExpData>
    <div style={{marginTop:"20px",marginLeft:"20px",width:"60vw",backgroundColor:" rgb(242, 221, 188)"}}>
      {expById["reference"]}
    </div>
    </ExpData>
  );
}
