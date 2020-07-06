import React, {useState, useContext} from "react";
import UserContext from "../../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import SelectField from "../selectFields/SelectFieldCreateProject";
import SelectAutocomplete from "../selectFields/SelectAutocomplete";
import DatePicker from "../selectFields/DatePicker";
import Axios from 'axios'
import "../Dashboard.css";




const ProjectCreate = () => {
  const history = useHistory()
  const {userId, setProjectCounter, projectCounter} = useContext(UserContext)
  const [selectedLangs, setSelectedLangs] = useState()
  
  const getLangs = (LangsInput) => {
    setSelectedLangs(LangsInput)
  }

  const create = (e)=>{
    e.preventDefault()
    Axios
      .post(`https://wdys.herokuapp.com/projects/create`,{"projectname":e.target[0].value, "langs":selectedLangs, "baselang":e.target[1].value, "deadline":e.target[4].value, "owner_id": userId})
      .then((res) => { 
          setProjectCounter(0)
          history.push("/projects")
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="body-project-create">
      <div className="col-center-full">
        <form onSubmit={(e)=>create(e)}>
          <div className="field-wrapper">
            <h1>Create a Project</h1>
            <label htmlFor="proj-create-name">Project Name </label>
            <input
              id="proj-create-name"
              className="custom-input"
              type="text"
              placeholder="Assign a project name"
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="proj-create-base-lang">Select Language(s) * </label>
            <SelectField id={"proj-create-base-lang"} />
          </div>
          <div htmlFor="proj-base-lang" className="field-wrapper">
            <label htmlFor="proj-create-trans-lang">
              Select Language(s) *{" "}
            </label>
            <SelectAutocomplete id={"proj-create-trans-lang"} getLangs={getLangs}/>
          </div>
          <div className="field-wrapper">
            <label htmlFor="proj-create-deadline">Deadline </label>
            <DatePicker id={"proj-create-deadline"} />
          </div>
            <button className="action blue" type="submit">
              Create
            </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreate;
