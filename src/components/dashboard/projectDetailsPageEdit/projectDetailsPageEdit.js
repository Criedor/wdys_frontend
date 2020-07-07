import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../../../contexts/ModalContext";
import UserContext from "../../../contexts/UserContext";
import { useRouteMatch, useHistory } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import AssignedTranslatorsTM from "../tables/AssignedTranslatorsTM";
import moment from 'moment'
import Axios from 'axios'
import "../Dashboard.css";

const ProjectDetailsPageEdit = () => {
  const { setModal, setModalOption} = useContext(ModalContext);
  const { setProjectCounter} = useContext(UserContext);
  const { userId, setAssignTranslatorTranslationPages, setAssignTranslatorTranslators } = useContext(UserContext);
  const projID = useRouteMatch("/projects/:projID/:basePageID");
  const basePageID = useRouteMatch("/projects/:projID/:basePageID")
  const [basePage, setBasePage] = useState()
  const [translationPages, setTranslationPages] = useState()
  const [translators, setTranslators] = useState()
  const [baseProject, setBaseProject] = useState()
  const history = useHistory()

  const handleEditProjForm = (e) => {
    e.preventDefault();
    Axios
    .put(`https://wdys.herokuapp.com/projects/${projID.params.projID}/${userId}/${basePageID.params.basePageID}/edit`,{pagename: e.currentTarget[0].value, description: e.currentTarget[1].value })
    .then((res) => { 
      history.push(`./`)
    })
    .catch((err) => console.log(err))
  };

  
  useEffect(() => {
   
    Axios
    .get(`https://wdys.herokuapp.com/projects/${projID.params.projID}/${userId}/${basePageID.params.basePageID}`)
    .then((res) => { 
      setBasePage(res.data.basepage);
      setTranslators(res.data.translators);
      setTranslationPages(res.data.translationpage)
      setAssignTranslatorTranslationPages(res.data.translationpage)
      setAssignTranslatorTranslators(res.data.translators);
      setBaseProject(res.data.baseproject)
      setProjectCounter(0)
    })
    .catch((err) => console.log(err))
  }, [basePageID.params.basePageID, projID.params.projID, setAssignTranslatorTranslationPages, setAssignTranslatorTranslators, userId]);


  return (
    <>
    {basePage &&  baseProject && translators && translationPages &&
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">{basePage.pagename}</div>
        <div className="col-left-info">
          <form onSubmit={(e)=>handleEditProjForm(e)}>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor="proj-details-page-name">Page Name </label>
                <input
                  id="proj-details-page-name"
                  className="custom-input"
                  type="text"
                  defaultValue={basePage.pagename}
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper w-320">
                <label htmlFor={"proj-details-page-descritpion"}>
                  Descritption
                </label>
                <input
                  id="proj-details-page-description"
                  className="custom-input"
                  type="text"
                  defaultValue={basePage.description}
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor={"proj-details-page-deadline"}>Deadline </label>
                  <div className="custom-result"> {moment(baseProject.deadline, "DD/MM/YYYY").format('DD-MM-YYYY')} </div>
              </div>
            </FormControl>
            <FormControl>
            <div className="field-wrapper">
              <label>Translation page link </label>
              <div className="custom-result"> 
                <a className='green' href={basePage.page_url} rel="noopener noreferrer" target='_blank'> {basePage.page_url} </a>
              </div>
            </div>
          </FormControl>
            <button className="action blue" type="submit">
                save
            </button>
          </form>
        </div>
      </div>
      <div className="column-right">
        <div className="title-gray">
          Translators
          <div className="assign-button" onClick={() => {setModal(1); setModalOption(5)}}>
            +
          </div>
        </div>
        <div>
        <AssignedTranslatorsTM translators={translators} translationpages={translationPages}/>
        </div>
      </div>
    </div>
  }
  </>
  );
};

export default ProjectDetailsPageEdit;
