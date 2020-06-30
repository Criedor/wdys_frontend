import React, { useContext } from "react";
import ModalContext from "../../../contexts/ModalContext";
// import { useParams } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import "../Dashboard.css";

const TranslatorDetails = () => {
  const { setModal, setModalOption, anchorEl, setAnchorEl, open } = useContext(
    ModalContext
  );

  //   const { userID } = useParams();
  // const match = useRouteMatch();

  return (
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          Translator's Name
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
        <div className="col-left-info">
          <div className="field-wrapper">
            <label>Email </label>
            <div className="custom-result"> example@email.com </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Translation Language(s) </label>
            <div className="custom-result"> German, French </div>
          </div>
        </div>
      </div>

      <div className="title-gray">Assigned pages</div>
    </div>
  );
};

export default TranslatorDetails;
