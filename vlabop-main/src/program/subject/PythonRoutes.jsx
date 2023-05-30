import { Route, Routes } from "react-router-dom";
import Python from "./python/Python";
import PyIntro from "./python/PyIntro";
// import AiExperiments from "./Ai/AiExperiments";
import PyObjective from "./python/PyObjective";
import PyTa from "./python/PyTa";
// import ExpData from "../../components/ExpDataa";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";

const PyRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);

  return (
    <Routes>
      <Route path="/program/course/subject/py" element={<Python />}/>
      <Route path="/program/course/subject/py/introduction" element={<PyIntro />} />
      <Route path="/program/course/subject/py/objective" element={<PyObjective />} />
      <Route path="/program/course/subject/py/experiment" element={<CreateExp />}/>
          {/* <Route path={`${currentExp}`} element={<ExpData />} /> */}
      <Route path="/program/course/subject/py/ta" element={<PyTa />} />
    </Routes>
  );
};
export default PyRoutes;