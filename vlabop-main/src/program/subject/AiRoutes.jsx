import { Route, Routes } from "react-router-dom";
import Ai from "./Ai/Ai";
import AiIntro from "./Ai/AiIntro";
import AiObjective from "./Ai/AiObjective";
import AiTa from "./Ai/AiTa";
import ExpData from "../../components/ExpData";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";
import {
  Aim,
  Theory,
  Procedure,
  Observation,
  Assignment,
  Reference,
} from "../../components/ExpDataa.jsx";

const AiRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);

  return (
    <Routes>
      <Route path="/program/course/subject/ai" element={<Ai />}/>
      <Route path="/program/course/subject/ai/introduction" element={<AiIntro />} />
      <Route path="/program/course/subject/ai/objective" element={<AiObjective />} />
      <Route path="/program/course/subject/ai/experiment" element={<CreateExp />}/>
      <Route path={`/program/course/subject/ai/experiment/${currentExp}`} element={<ExpData />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/aim`} element={<Aim />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/theory`} element={<Theory />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/procedure`} element={<Procedure />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/observation`} element={<Observation />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/assignment`} element={<Assignment />} />
      <Route path={`/program/course/subject/ai/experiment/${currentExp}/reference`} element={<Reference />} />
      <Route path="ta" element={<AiTa />} />
    </Routes>
  );
};

export default AiRoutes;