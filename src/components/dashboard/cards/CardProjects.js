import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom'
import ModalContext from "../../../contexts/ModalContext";
import { Link, useRouteMatch } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import moment from 'moment'
import MoreVert from "@material-ui/icons/MoreVert";
import "./Card.css";

const CardProjects = ( props ) => {
  const { setModal, setModalOption, setModalObject } = useContext(
    ModalContext
  );

  const [anchorEl, setAnchorEl] = useState(null)
   // const variable to
   const open = Boolean(anchorEl);

 const history = useHistory()

 const match = useRouteMatch();
 let url = match.url+"/"+props.id+"/update"
 
 return (
    <div className="card" >
      <div className="card-top" >
        <Link to={`${match.url}/${props.id}`} style={{ color: "#ffffff" }}>
          {props.projectname}
        </Link>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={(e) => {
            setAnchorEl(e.target);
          }}
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
         {/* <Link to={`${match.url}/${props.id}/update`}> */}
          <MenuItem                
                onClick={() => {
                setAnchorEl(false);
                history.push(url)
              }}
            >
              Edit
            </MenuItem>
          {/* </Link>           */}
          <MenuItem
            id={props.id}
            onClick={(e) => {
              setModal(1);
              setModalOption(3);
              setAnchorEl(false);
              setModalObject(e.currentTarget.id)
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
      <Link to={`${match.url}/${props.id}`}>
        <div className="card-bottom">
          <div className="project-info">
            From:
            <span> {props.baselang}</span>
          </div>
          <div className="project-info">
            To:
            <span> {props.langs.join(", ")}</span>
          </div>
          <div className="project-info">
            By: <span> {moment(props.deadline).format('DD-MM-YYYY')}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProjects;
