import React, { useContext } from "react";
import ModalContext from "../../../contexts/ModalContext";
import { Link, useRouteMatch } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AssignedTranslatorsTM from "../tables/AssignedTranslatorsTM";
import "../Dashboard.css";

const ProjectDetailsPage = () => {
  const { setModal, setModalOption, anchorEl, setAnchorEl, open } = useContext(
    ModalContext
  );

  const match = useRouteMatch();

  return (
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          Page Name (Homepage)
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
            <Link to={`${match.url}/update`}>
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
            <label>From </label>
            <div className="custom-result"> Project Name </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Description </label>
            <div className="custom-result"> Blah, blah, blah... </div>
          </div>

          <div className="field-wrapper">
            <label>Deadline </label>
            <div className="custom-result"> 29/06/2020 </div>
          </div>
        </div>
      </div>
      <div className="column-right">
        <div className="title-gray">
          Translators
          <Link
            onClick={() => {
              setModal(1);
              setModalOption(5);
            }}
          >
            <div className="assign-button">+</div>
          </Link>
        </div>
        <div>
          <AssignedTranslatorsTM />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
