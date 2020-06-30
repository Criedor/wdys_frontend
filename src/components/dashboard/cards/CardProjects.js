import React, { useContext } from "react";
import ModalContext from "../../../contexts/ModalContext";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import "./Card.css";

const Card = () => {
  const { setModal, setModalOption, anchorEl, setAnchorEl, open } = useContext(
    ModalContext
  );

  // const variable to for the MUI Edit/Delete
  // const open = Boolean(anchorEl);

  // router url parameters
  const { projID } = useParams();
  const match = useRouteMatch();

  return (
    <div className="card">
      <div className="card-top">
        <Link to={`${match.url}/${projID}`} style={{ color: "#ffffff" }}>
          Project Name
        </Link>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          style={{ padding: 0, minWidth: 0 }}
        >
          <MoreVert style={{ color: "#ffffff" }} />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={(e) => setAnchorEl(false)}
        >
          <Link to={`${match.url}/${projID}/update`}>
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
      <Link to={`${match.url}/${projID}`}>
        <div className="card-bottom">
          <div className="project-info">
            From:
            <span> English</span>
          </div>
          <div className="project-info">
            To:
            <span> German, French, Portuguese</span>
          </div>
          <div className="project-info">
            By: <span> 11 / 07 / 2020</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
