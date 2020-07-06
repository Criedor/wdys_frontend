import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext";
import { Icon } from "@material-ui/core";
import Axios from 'axios'
import "./Modal.css";

const RemoveTranslator = () => {
  // modalObject ids the translator's ID
  const { setModal, setModalOption, modalObject } = useContext(ModalContext);
  const { userId, translatorCounter, setTranslatorCounter } = useContext(UserContext);
  
  const removeTranslator = (e)=>{
    e.preventDefault()
    Axios
      .delete(`https://wdys.herokuapp.com/translators/remove`,{data: {"user_id": userId, "translator_id": modalObject}})
      .then((res) => { 
        setModal(0);
        setModalOption(1);
        setTranslatorCounter(translatorCounter-1)
      })
      .catch((err) => console.log(err))
  }
  
  return (
    <> 
      <div className="delete-body">
        <form action="#" className="center" method="POST">
          <Icon style={{ fontSize: "60px", marginBottom: "30px" }}>face</Icon>
          <h2 className="mt-0">Remove Translator</h2>

          <strong>
            Once translators are removed, they cannot be restored.
          </strong>
          <p className="message">
            Are you sure you want to remove the translator?
          </p>
          <div className="flex-inline">
            <button className="action danger w205"onClick={(e)=>removeTranslator(e)}>Remove</button>
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

export default RemoveTranslator;
