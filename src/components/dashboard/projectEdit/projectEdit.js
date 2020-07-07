import React, {useContext, useEffect, useState} from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import SelectAutocompleteEdit from "../selectFields/SelectAutocompleteEdit";
import DatePickerEdit from "../selectFields/DatePickerEdit";
import { FormControl } from "@material-ui/core";
import ProjectPagesTM from "../tables/ProjectPagesTM";
import UserContext from '../../../contexts/UserContext'
import Axios from 'axios'
import moment from 'moment'
import "../Dashboard.css";

const ProjectEdit = () => {
  const { userProjects, userId } = useContext(UserContext);
  const [project, setProject] = useState();
  const [selectedLangs, setSelectedLangs] = useState()
  const projectId = useRouteMatch({path: "/projects/:projID/update",});
  const history = useHistory()
  const match = useRouteMatch();

 
  const getLangs = (l) => {
  setSelectedLangs(l)
  }


  useEffect(()=>{
    setProject(userProjects.filter(project => project._id === projectId.params.projID)[0])
  },[projectId.params.projID, userProjects])


  const handleUpdateProjForm = (e) => {
    e.preventDefault();
    let changeProjectName
    let changeProjectLangs
    if (selectedLangs) {changeProjectLangs = selectedLangs}
    else {changeProjectLangs = project.langs}

    if (e.currentTarget[0].value) {changeProjectName = e.currentTarget[0].value}
    else changeProjectName = project.projectname

    Axios
    .put(`https://wdys.herokuapp.com/projects/${match.params.projID}/update`, {user_id: userId, projectname: changeProjectName, langs: changeProjectLangs, deadline: moment(e.currentTarget[4].value,"DD-MM-YYYY").format("YYYY-MM-DD")})
    .then((res) => { 
      console.log(res)
      history.push(`/projects/${project._id}`)
    })
    .catch((err) => console.log(err))



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
