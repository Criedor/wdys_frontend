import React, { useContext, useState, useEffect } from "react";
import ModalContext from "../../../contexts/ModalContext";
import UserContext from "../../../contexts/UserContext";
import { Link, useRouteMatch } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AssignedTranslatorsTM from "../tables/AssignedTranslatorsTM";
import Axios from 'axios'
import "../Dashboard.css";

const ProjectDetailsPage = () => {
  const { setModal, setModalOption} = useContext(ModalContext);
  const { userId, setAssignTranslatorTranslationPages, setAssignTranslatorTranslators } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState()
  const open = Boolean(anchorEl);
  const projID = useRouteMatch("/projects/:projID/:basePageID");
  const basePageID = useRouteMatch("/projects/:projID/:basePageID")
  const [basePage, setBasePage] = useState()
  const [translationPages, setTranslationPages] = useState()
  const [translators, setTranslators] = useState()
  const [baseProject, setBaseProject] = useState()




  useEffect(() => {
    Axios
    .get(`https://wdys.herokuapp.com/projects/${projID.params.projID}/${userId}/${basePageID.params.basePageID}`)
    .then((res) => { 
      setBasePage(res.data.basepage);
      setAssignTranslatorTranslationPages(res.data.translationpage);
      setTranslators(res.data.translators);
      setAssignTranslatorTranslators(res.data.translators);
      setTranslationPages(res.data.translationpage);
      setBaseProject(res.data.baseproject)
    })
    .catch((err) => console.log(err))
  }, [basePageID.params.basePageID, projID.params.projID,  setAssignTranslatorTranslationPages, setAssignTranslatorTranslators, userId]);


  return (
    <>
    {basePage &&  baseProject && translators && translationPages &&
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          {basePage.pagename}
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            style={{ padding: 0, minWidth: 0 }}
          >
            <MoreVert style={{ color: "#000000" }} />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={(e) => setAnchorEl(false)}
          >
            <Link to={`/projects/${projID.params.projID}/${basePageID.params.basePageID}/update`}>
              <MenuItem
                onClick={() => {
                  setAnchorEl(false);
                }}
              >
                Edit
              </MenuItem>           </Link>
            <MenuItem
              onClick={() => {
                setModal(1);
                setModalOption(3);
                setAnchorEl(false);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </div>
        <div className="col-left-info">
          <div className="field-wrapper">
            <label>From </label>
            <div className="custom-result"> {baseProject.projectname} </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Description </label>
            <div className="custom-result"> {basePage.description} </div>
          </div>

          <div className="field-wrapper">
            <label>Deadline </label>
            <div className="custom-result"> {baseProject.deadline} </div>
          </div>
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

export default ProjectDetailsPage;
