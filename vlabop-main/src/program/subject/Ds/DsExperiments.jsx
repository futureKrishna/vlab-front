import { Outlet } from "react-router-dom";
import CreateExp from "../../../components/CreateExp";

function DsExperiments() {
  return (
    <div className="content">
      <h2>
        <u>Data Structures</u>
      </h2>
      <CreateExp />
    </div>
  );
}

export default DsExperiments;
