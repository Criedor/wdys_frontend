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

  // router url parameters
  const { userID } = useParams();
  const match = useRouteMatch();

  return (
    <div className="card">
      <div className="card-top">
        <Link to={`${match.url}/${userID}`} style={{ color: "#ffffff" }}>
          Translator's Name
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
          <MenuItem
            onClick={() => {
              setModal(1);
              setModalOption(4);
              setAnchorEl(false);
            }}
          >
            Remove
          </MenuItem>
        </Menu>
      </div>
      <Link to={`${match.url}/${userID}`}>
        <div className="card-bottom">
          <div className="project-info">
            Languages:
            <span> German, Italian, Portuguese</span>
          </div>
          <div className="project-info">
            Email: <span> james.matthew.scotch@email.com</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
