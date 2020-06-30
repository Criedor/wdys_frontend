import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import { Delete } from "@material-ui/icons";
import "./Modal.css";

const DeleteProject = () => {
  const { setModal, setModalOption } = useContext(ModalContext);

  return (
    <>
      <div className="delete-body">
        <form action="#" className="center" method="POST">
          <Delete style={{ fontSize: "60px", marginBottom: "30px" }} />
          <h2 className="mt-0">Delete </h2>

          <strong>Deleted projects cannot be restored.</strong>
          <p className="message">
            Are you sure you want to delete the project?
          </p>
          <div className="flex-inline">
            <button className="action danger w205">Delete</button>
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

export default DeleteProject;
