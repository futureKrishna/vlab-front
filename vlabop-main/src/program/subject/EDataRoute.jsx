import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpData from "../../components/ExpData.js";


const PsRoutes = () => {
  const { sub } = useSelector((state) => state.subject);
  const {currentExp} = useSelector((state)=>state.expid)

  return (
    <Routes>
      {/* <Route
        path={`program/course/subject/${sub}/experiment/${currentExp}`}
        element={<ExpData />}> */}
        
      {/* </Route> */}
    </Routes>
  );
};

export default PsRoutes;
