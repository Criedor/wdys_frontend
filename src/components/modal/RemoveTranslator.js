import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import { Icon } from "@material-ui/core";
import "./Modal.css";

const RemoveTranslator = () => {
  const { setModal, setModalOption } = useContext(ModalContext);
  return (
    <>
      <div className="delete-body">
        <form action="#" className="center" method="POST">
          <Icon style={{ fontSize: "60px", marginBottom: "30px" }}>face</Icon>
          <h2 className="mt-0">Remove Translator</h2>

          <strong>
            Once translators are removed, they cannot be restored.
          </strong>
          <p className="message">
            Are you sure you want to remove the translator?
          </p>
          <div className="flex-inline">
            <button className="action danger w205">Remove</button>
            <button
              className="action blue w205"
              onClick={() => {
                setModal(0);
                setModalOption(1);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RemoveTranslator;
