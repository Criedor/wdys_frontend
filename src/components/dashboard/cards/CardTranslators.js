import React, { useContext, useState } from "react";
import ModalContext from "../../../contexts/ModalContext";
import { Link, useRouteMatch } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import "./Card.css";

const CardTranslators = ({ transName, transLangs, transEmail, id }) => {
  const { setModal, setModalOption, setModalObject } = useContext(
    ModalContext
  );
  
  const [anchorEl, setAnchorEl] = useState(null)
   // const variable to
   const open = Boolean(anchorEl);

  // router url parameters
  const match = useRouteMatch();
  return (
    <div className="card">
      <div className="card-top">
        <Link to={`${match.url}/${id}`} style={{ color: "#ffffff" }}>
          {transName}
        </Link>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={(e) => setAnchorEl(e.target)}
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
            onClick={(e) => {
              setModal(1);
              setModalOption(4);
              setAnchorEl(false);
              setModalObject(id)
            }}
          >
            Remove
          </MenuItem>
        </Menu>
      </div>
      <Link to={`${match.url}/${id}`}>
        <div className="card-bottom">
          <div className="trans-info">
            Languages:
          <span className='lang-code'> {transLangs.join(", ")}</span>
          </div>
          <div className="trans-info">
            Email: <span> {transEmail}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardTranslators;
