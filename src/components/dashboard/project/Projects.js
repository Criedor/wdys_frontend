import React, { useContext } from "react";
import CardProjects from "../cards/CardProjects";
import UserContext from "../../../contexts/UserContext";
var uniqid = require('uniqid');

const Project = () => {
  
  const { userProjects } = useContext(UserContext);
  console.log(userProjects)
  return (
    <>
    <div className="body-project">
  {userProjects.length !== 0 ?
    <>
    {userProjects.map(project => 
        <CardProjects key={uniqid()} id={project._id} projectname={project.projectname} baselang={project.baselang} langs={project.langs} deadline={project.deadline}/>
      )}
    </>
    :
    <div>Looks like you have no projects yet</div>
    }
    </div>
    </>
  );
};

export default Project;
