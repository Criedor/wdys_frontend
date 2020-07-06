import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import CardProjects from "../cards/CardProjects";
import CardTranslators from "../cards/CardTranslators";
import UserContext from "../../../contexts/UserContext";
var uniqid = require('uniqid');

const Project = () => {
  const matchTranslatorsRoute = useRouteMatch({
    path: "/projects",
  });
  
  const { userProjects } = useContext(UserContext);
  
  return (
    <div className="body-project">
    {matchTranslatorsRoute?
      userProjects.map(project => 
        <CardProjects key={uniqid()} id={project._id} projectname={project.projectname} baselang={project.baselang} langs={project.langs} deadline={project.deadline}/>
      ):  
      <CardTranslators />
    }
    </div>
  );
};

export default Project;
