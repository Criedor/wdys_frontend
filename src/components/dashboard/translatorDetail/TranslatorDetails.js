import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../../../contexts/ModalContext";
import UserContext from "../../../contexts/UserContext";
import { useParams } from "react-router-dom";
import MoreVert from "@material-ui/icons/MoreVert";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AssignedPagesTR from "../tables/AssignedPagesTR";
import Axios from 'axios';
import "../Dashboard.css";

const TranslatorDetails = () => {
  const [translatorDetails, setTranslatorDetails] = useState()
  const [assignedPages, setAssignedPages] = useState()
  const [basePages, setBasePages] = useState()

  const { setModal, setModalOption, anchorEl, setAnchorEl, open } = useContext(
    ModalContext
  );

  const { userId } = useContext(UserContext);

    const { translatorID } = useParams();
  // const match = useRouteMatch();
  console.log(assignedPages)

  useEffect(() => {
    let url = `https://wdys.herokuapp.com/translators/${userId}/${translatorID}`
    Axios
    .get(url)
    .then((res) => {
      setTranslatorDetails(res.data.translator);
      setAssignedPages(res.data.assignedPages);
      setBasePages(res.data.basepages);
      })
    .catch((err) => console.log(err))
  }, [])

  // console.log(translatorDetails)

  return (
    <>
    {translatorDetails &&
      <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">
          {translatorDetails.displayname}
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
            <div className="custom-result"> {translatorDetails.email} </div>
          </div>

          <div className="field-wrapper w-320">
            <label>Translation Language(s) </label>
            <div className="custom-result">
              {translatorDetails.translator_langs.join(', ')}
            </div>
          </div>
        </div>
      </div>

      <div className="column-right">
        <div className="title-gray">Assigned pages</div>
        <div>
          <AssignedPagesTR 
            translatorDetails={translatorDetails} 
            assignedPages={assignedPages} 
            basePages={basePages}
            />
        </div>
      </div>
    </div>}
    </>
  );
};

export default TranslatorDetails;
