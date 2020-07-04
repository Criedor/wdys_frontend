import React, {useContext, useEffect, useState} from "react";
import { useRouteMatch } from "react-router-dom";
import SelectAutocompleteEdit from "../selectFields/SelectAutocompleteEdit";
import DatePickerEdit from "../selectFields/DatePickerEdit";
import { FormControl } from "@material-ui/core";
import ProjectPagesTM from "../tables/ProjectPagesTM";
import UserContext from '../../../contexts/UserContext'
import "../Dashboard.css";

const ProjectEdit = () => {
  const { userProjects, langs } = useContext(UserContext);
  const [project, setProject] = useState();
  const projectId = useRouteMatch({
    path: "/projects/:projID/update",
  });

  const [selectedLangs, setSelectedLangs] = useState(["German"])
  
  const getLangs = (LangsInput) => {
  setSelectedLangs(LangsInput)
  }

  useEffect(()=>{
      setProject(userProjects.filter(project => project._id === projectId.params.projID)[0])
  },[userProjects])


  const handleUpdateProjForm = (e) => {
    e.preventDefault();
    console.log(e.currentTarget[0].value)
    console.log(selectedLangs)
    console.log(e.currentTarget[4].value)




  };

  return (
    <>
    {project &&
    <div className="body-project-details">
      <div className="col-left-380">
        <div className="title-gray">{project.projectname}</div>
        <div className="col-left-info">
          <form onSubmit={(e)=>handleUpdateProjForm(e)}>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor="proj-details-name">Project Name </label>
                <input
                  id="proj-details-name"
                  className="custom-input"
                  type="text"
                  placeholder="Assign a new project name"
                />
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label>Base Language </label>
                <div className="custom-result"> {project.baselang} </div>
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper w-320">
                <label htmlFor={"proj-details-trans-lang"}>
                  Translation Language(s) *
                </label>
                <SelectAutocompleteEdit id={"proj-details-trans-lang"} projectlangs={project.langs} getLangs={getLangs}/>
              </div>
            </FormControl>
            <FormControl>
              <div className="field-wrapper">
                <label htmlFor={"proj-details-deadline"}>Deadline </label>
                <DatePickerEdit id={"proj-details-deadline"} currentDeadline={project.deadline}/>
              </div>
            </FormControl>
            <div className="field-wrapper">
              <label htmlFor={"proj-details-deadline"}>Project ID </label>
              <div className="custom-result green">
                {project._id}
              </div>
            </div>

            <button className="action blue" type="submit">
              save
            </button>
          </form>
        </div>
      </div>
      <div className="column-right">
        <div className="title-gray">Project pages</div>
        <div>
          <ProjectPagesTM />
        </div>
      </div>
    </div>
  }
  </>
  );
};

export default ProjectEdit;
