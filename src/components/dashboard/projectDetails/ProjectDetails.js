import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../../../contexts/ModalContext";
import UserContext from "../../../contexts/UserContext";
import { Link, useParams } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ProjectPagesTM from "../tables/ProjectPagesTM";
import moment from 'moment'
import Axios from 'axios'

import "../Dashboard.css";

const ProjectDetails = () => {
  const { setModal, setModalOption,setModalObject } = useContext(ModalContext);
  const { userId } = useContext(UserContext);
  const { projID } = useParams();
  const [projectdata, setProjectdata] = useState();
  const [projectpages, setProjectPages] = useState()
  const [anchorEl, setAnchorEl] = useState()
  const open = Boolean(anchorEl);

  useEffect(() => {
    Axios
    .get(`https://wdys.herokuapp.com/projects/${projID}/${userId}`)
    .then((res) => { 
      setProjectdata(res.data.project);
      setProjectPages(res.data.pages)
    })
    .catch((err) => console.log(err))
  }, [userId, projID]);




  return (
    <>
    {projectdata &&  
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          {projectdata.projectname}
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
            onClose={() => setAnchorEl(false)}
          >
            <Link to={`${projID}/update`}>
              <MenuItem
                onClick={() => {
                  setAnchorEl(false);
                }}
              >
                Edit
              </MenuItem>
            </Link>
            <MenuItem
              onClick={(e) => {
                setModal(1);
                setModalOption(3);
                setAnchorEl(false);
                setModalObject(projectdata._id)
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </div>
        <div className="col-left-info">
          <div className="field-wrapper">
            <label>Base Language </label>
            <div className="custom-result"> {projectdata.baselang} </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Translation Language(s) </label>
            <div className="custom-result"> {projectdata.langs.join(", ")} </div>
          </div>

          <div className="field-wrapper">
            <label>Deadline </label>
            <div className="custom-result"> {moment(projectdata.deadline).format('DD-MM-YYYY')} </div>
          </div>

          <div className="field-wrapper">
            <label htmlFor={"proj-details-deadline"}>Project ID </label>
            <div className="custom-result green">
              {projectdata._id}
            </div>
          </div>
        </div>
      </div>
      <div className="column-right">
        <div className="title-gray">Project pages</div>
        <div>
          <ProjectPagesTM projectpages={projectpages}/>
        </div>
      </div>
    </div>
  }
  </>
  );
};

export default ProjectDetails;
