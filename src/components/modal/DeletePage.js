import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import ModalContext from "../../contexts/ModalContext";
import { Delete } from "@material-ui/icons";
import Axios from 'axios'
import "./Modal.css";

const DeletePage = () => {
  const { setModal, setModalOption, modalObject } = useContext(ModalContext);
  const history = useHistory()

  

  const deleteCall = (e)=>{
    e.preventDefault()
    
    Axios
      .delete(`https://wdys.herokuapp.com/projects/${modalObject}/delete`)
      .then((res) => { 
        setModal(0);
        setModalOption(1);
      history.push('../')
      })
      .catch((err) => console.log(err))
  }


  return (
    <>
      <div className="delete-body">
        <form className="center" method="POST">
          <Delete style={{ fontSize: "60px", marginBottom: "30px" }} />
          <h2 className="mt-0">Delete </h2>

          <strong>Deleted pages cannot be restored.</strong>
          <p className="message">
            Are you sure you want to delete the page?
          </p>
          <div className="flex-inline">
            <button className="action danger w205" onClick={(e)=>deleteCall(e)}>Delete</button>
            <button
              className="action blue w205"
              onClick={() => {
                setModal(0);
                setModalOption(1);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DeletePage;
