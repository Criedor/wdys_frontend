import React, { useContext } from "react";
import ModalContext from "../../../contexts/ModalContext";
import { Link, useParams } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import ProjectPagesTM from "../tables/ProjectPagesTM";
import "../Dashboard.css";

const ProjectDetails = () => {
  const { setModal, setModalOption, anchorEl, setAnchorEl, open } = useContext(
    ModalContext
  );

  const { projID } = useParams();
  // const match = useRouteMatch();

  return (
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          Project Name
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
            <label>Base Language </label>
            <div className="custom-result"> Language </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Translation Language(s) </label>
            <div className="custom-result"> Translation language(s) </div>
          </div>

          <div className="field-wrapper">
            <label>Deadline </label>
            <div className="custom-result"> 29/06/2020 </div>
          </div>

          <div className="field-wrapper">
            <label htmlFor={"proj-details-deadline"}>Project ID </label>
            <div className="custom-result green">
              wdys-project-name-02943r734r39
            </div>
          </div>
        </div>
      </div>
      <div className="column-right">
        <div className="title-gray">Project pages</div>
        <div>
          <ProjectPagesTM />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
