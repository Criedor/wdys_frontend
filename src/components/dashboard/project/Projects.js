import React, { useContext } from "react";
import CardProjects from "../cards/CardProjects";
import UserContext from "../../../contexts/UserContext";
import { ReactComponent as AddProject } from './add-project.svg'
var uniqid = require('uniqid');

const Project = () => {
  
  const { userProjects } = useContext(UserContext);
  console.log(userProjects)
  return (
    <>
    {userProjects.length !== 0 ?
      <div className="body-project">
        {userProjects.map(project => 
            <CardProjects key={uniqid()} id={project._id} projectname={project.projectname} baselang={project.baselang} langs={project.langs} deadline={project.deadline}/>
          )}
      </div>
      :
      <div className='no-table'>
        <div className='center'>
          <AddProject style={{maxWidth: '400px', maxHeight: '300px'}}/>
          <p className='center'>Looks like you have no projects yet, get started by adding one.</p>
        </div>
      </div>
    }
    
    </>
  );
};

export default Project;
