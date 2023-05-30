import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { allFetchedExp } from "./GetExp";
import { setAllExp } from "../rtk/exp";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setExpById, setCurrentExp } from "../rtk/expbyid.js";
import Ai from "../program/subject/Ai/Ai";

function CreateExp() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [aim, setAim] = useState("");
  const [theory, setTheory] = useState("");
  const [procedure, setProcedure] = useState("");
  const [observation, setObservation] = useState("");
  const [assignment, setAssignment] = useState("");
  const [reference, setReferences] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { allExp } = useSelector((state) => state.allexp)
  let {loginType}=useSelector((state)=>state.api)
  const { currentExp } = useSelector((state) => state.expid);
  const createExp = async () => {
    const resp = await axios.post(
      `http://localhost:3000/addexp`,
      {
        number,
        name,
        aim,
        theory,
        procedure,
        observation,
        assignment,
        reference,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await resp.data;
    return data;
  };

  useEffect(() => {
    const allExpData = async () => {
      const expData = await allFetchedExp();
      dispatch(setAllExp(expData));
    };
    allExpData();
    return ()=>{
      dispatch(setAllExp([]))
    }
  }, []);

  const submitHandler = async (event) => {
    // event.preventDefault();
    const data = await createExp();
    // const allExpData = async () => {
      const expData = await allFetchedExp();
      dispatch(setAllExp(expData));
    // };
    // allExpData();
    setNumber("");
    setName("");
    setAim("");
    setTheory("");
    setProcedure("");
    setObservation("");
    setAssignment("");
    setReferences("");
    setModalIsOpen(false);
  };

  const openExp = async (number) => {
    const resp = await axios.get(`http://localhost:3000/getexp/${number}`);
    const data = await resp.data;
    dispatch(setExpById(data));
    dispatch(setCurrentExp(number));
  };

  const deleteHandler=async(id)=>{
    const resp = await axios.delete(`http://localhost:3000/deleteexp/${id}`);
    const data = await resp.data;
  }

  return (
    <Ai>
    <div className="createexp-main-div">
      {currentExp===0?
      <div style={{height:"100vh",width:"85vw",backgroundColor:"beige"}}>
      {allExp.map((value, index) => {
        return (
          <div style={{display:"flex",height:"60px",backgroundColor:"beige"}} key={index}>
            <Link style={{marginLeft:'100px',marginTop:'30px',fontSize:"25px"}} to={`${value.number}/aim`} onClick={()=>openExp(value.number)}>
              <p style={{textDecoration:"none",color:"black",fontWeight:"bold"}}>{value.name}</p>
              {loginType==='flogin'?<button onClick={()=>deleteHandler(value.number)}>Delete</button>:null}
            </Link>
          </div>
        );
      })}</div>:null}

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
        <Modal.Header>
          <Modal.Title className="create-modal-title">
            New Experiment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formWraper" onSubmit={submitHandler}>
            <label>
              Experiment Number:
              <input
                className="title-input"
                placeholder="Enter experiment no."
                required={true}
                type="text"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </label>

            <label>
              Experiment Name:
              <input
                className="title-input"
                placeholder="Enter experiment name"
                required={true}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label>
              Aim:
              <textarea
                className="body-textarea"
                placeholder="aim"
                required={true}
                type="text"
                value={aim}
                onChange={(event) => setAim(event.target.value)}
              />
            </label>

            <label>
              Theory:
              <textarea
                className="body-textarea"
                placeholder="theory"
                required={true}
                value={theory}
                onChange={(event) => setTheory(event.target.value)}
              />
            </label>

            <label>
              Procedure:
              <textarea
                className="body-textarea"
                placeholder="procedure"
                required={true}
                value={procedure}
                onChange={(event) => setProcedure(event.target.value)}
              />
            </label>

            <label>
              Observation:
              <textarea
                className="body-textarea"
                placeholder="observation"
                required={true}
                value={observation}
                onChange={(event) => setObservation(event.target.value)}
              />
            </label>

            <label>
              Assignment:
              <textarea
                className="body-textarea"
                placeholder="assignment"
                required={true}
                value={assignment}
                onChange={(event) => setAssignment(event.target.value)}
              />
            </label>

            <label>
              References:
              <textarea
                className="body-textarea"
                placeholder="references"
                required={true}
                value={reference}
                onChange={(event) => setReferences(event.target.value)}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="create-cancelexp-btn"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button className="create-addexp-btn" onClick={() => submitHandler()}>
            Add Experiment
          </button>
        </Modal.Footer>
      </Modal>
      {loginType==="flogin"?
      <button style={{marginLeft:"17px"}} className="newexp-btn" onClick={() => setModalIsOpen(true)}>
        Add New Experiment
      </button>:null
      }
      {/* <Outlet/> */}
    </div>
    </Ai>
  );
}

export default CreateExp;
