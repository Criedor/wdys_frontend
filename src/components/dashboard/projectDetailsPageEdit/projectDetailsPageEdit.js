import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import ModalContext from "../../../contexts/ModalContext";
import { Link } from "react-router-dom";
import AssignedTranslatorsTM from "../tables/AssignedTranslatorsTM";
import "../Dashboard.css";

const ProjectDetailsPageEdit = () => {
  let { projID, basePageID } = useParams();

  console.log({ projID: projID });

  console.log({ basePageID: basePageID });

  const handleCreateProjForm = (e) => {
    e.preventDefault();
  };
  const { setModal, setModalOption } = useContext(ModalContext);

  return (
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">Page Name</div>
        <div className="col-left-info">
          <form onSubmit={handleCreateProjForm}>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor="proj-details-page-name">Page Name </label>
                <input
                  id="proj-details-page-name"
                  className="custom-input"
                  type="text"
                  placeholder="Assign a page name"
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper w-320">
                <label htmlFor={"proj-details-page-descritpion"}>
                  Descritption
                </label>
                <input
                  id="proj-details-page-description"
                  className="custom-input"
                  type="text"
                  placeholder="Add information about the page"
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor={"proj-details-page-deadline"}>Deadline </label>
                <div className="field-wrapper">
                  <div className="custom-result"> 11/07/2020 </div>
                </div>
              </div>
            </FormControl>
            <Link to={`/projects/${projID}/${basePageID}`}>
              <button className="action blue" type="submit">
                save
              </button>
            </Link>
          </form>
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

export default ProjectDetailsPageEdit;
