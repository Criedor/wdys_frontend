import React, { useContext } from "react";
import ModalContext from "../../contexts/ModalContext";
import SelectField from "../dashboard/selectFields/SelectField";
import "./Modal.css";
import "../dashboard/Dashboard.css";

const AssignTranslator = () => {
  const { setModal, setModalOption } = useContext(ModalContext);

  return (
    <>
      <div className="login-body">
        <form action="#" method="POST">
          <h2 className="mt-0 center">Assign Translator </h2>

          <div className="field-wrapper">
            <label htmlFor={"assign-translator-trans-langs"}>
              Select translation Language
            </label>
            <SelectField id={"assign-translator-trans-langs"} />
          </div>
          <div className="field-wrapper">
            <label htmlFor={"assign-translator-trans-langs"}>
              Select translator
            </label>
            <SelectField id={"assign-translator-trans-langs"} />
          </div>
          <div className="flex-inline">
            <button
              className="action blue w205"
              onClick={() => {
                setModal(0);
                setModalOption(1);
              }}
            >
              Assign
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssignTranslator;
