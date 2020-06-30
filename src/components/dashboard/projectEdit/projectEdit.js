import React from "react";
import SelectAutocomplete from "../selectFields/SelectAutocomplete";
import DatePicker from "../selectFields/DatePicker";
import { FormControl } from "@material-ui/core";
import "../Dashboard.css";

const ProjectEdit = () => {
  const handleCreateProjForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">Project Name</div>
        <div className="col-left-info">
          <form onSubmit={handleCreateProjForm}>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor="proj-details-name">Project Name </label>
                <input
                  id="proj-details-name"
                  className="custom-input"
                  type="text"
                  placeholder="Assign a project name"
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label>Base Language </label>
                <div className="custom-result"> Language </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper w-320">
                <label htmlFor={"proj-details-trans-lang"}>
                  Translation Language(s) *
                </label>
                <SelectAutocomplete id={"proj-details-trans-lang"} />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor={"proj-details-deadline"}>Deadline </label>
                <DatePicker id={"proj-details-deadline"} />
              </div>
            </FormControl>
            <div className="field-wrapper">
              <label htmlFor={"proj-details-deadline"}>Project ID </label>
              <div className="custom-result green">
                wdys-project-name-02943r734r39
              </div>
            </div>

            <button className="action blue" type="submit">
              save
            </button>
          </form>
        </div>
      </div>

      <div className="title-gray">Project pages</div>
    </div>
  );
};

export default ProjectEdit;
