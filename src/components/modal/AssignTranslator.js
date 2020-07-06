import React, { useContext, useState } from "react";
import { useRouteMatch, useHistory } from 'react-router-dom'  ;
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext";
import SelectFieldTranslationPages from "../dashboard/selectFields/SelectFieldTranslationPages";
import SelectFieldTranslator from "../dashboard/selectFields/SelectFieldTranslator";
import Axios from 'axios'
import "./Modal.css";
import "../dashboard/Dashboard.css";

const AssignTranslator = () => {
  const [selectedTranslator, setSelectedTranslator] = useState()
  const [selectedTranslationPage, setSelectedTranslationPage] = useState()
  const { setModal, setModalOption } = useContext(ModalContext)
  const projID = useRouteMatch("/projects/:projID/:basePageID");
  const history = useHistory()

  const handleAssign = (e)=>{
    e.preventDefault();

    Axios
      .put(`https://wdys.herokuapp.com/projects/${projID.params.projID}/assign`,{page_id: selectedTranslationPage, translator_id:selectedTranslator})
      .then((res) => { 
        setModal(0);
        setModalOption(1);
        history.push(`${projID.params.basePageID}`)
      })
      .catch((err) => console.log(err))    
  }

  return (
    
    <>
      <div className="login-body">
        <form onSubmit={(e) => handleAssign(e)}>
          <h2 className="mt-0 center">Assign Translator </h2>

          <div className="field-wrapper">
            <label htmlFor={"assign-translator-trans-pages"}>
              Select translation page
            </label>
            <SelectFieldTranslationPages id={"assign-translator-trans-pages"} selectedTranslationPage={setSelectedTranslationPage} />
          </div>
          <div className="field-wrapper">
            <label htmlFor={"assign-translator-translator"}>
              Select translator
            </label>
            <SelectFieldTranslator id={"assign-translator-translator"} selectedTranslator={setSelectedTranslator}/>
          </div>
          <div className="flex-inline">
            <button className="action blue w205">
              Assign
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssignTranslator;
