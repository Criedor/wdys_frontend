import React, { useContext, useEffect } from "react";
import CardProjects from "../cards/CardProjects";
import UserContext from "../../../contexts/UserContext";
import Axios from "axios";
var uniqid = require('uniqid');

const Project = () => {
  const { userId, userProjects, setUserProjects, projectCounter, setProjectCounter } = useContext(UserContext);

  // API call to load the Projects section
   useEffect(() => {
     if (userProjects.length === 0 || projectCounter === 0 ) {
     let url = `https://wdys.herokuapp.com/initial/${userId}`
     Axios
     .get(url, {headers: {'Content-Type':'application/json'}})
     .then((res) => { 
       setUserProjects(res.data.userprojects);
       setProjectCounter(res.data.userprojects.length)
     })
     .catch((err) => console.log(err))
   }
   }, [userId, projectCounter, setUserProjects, setProjectCounter, userProjects.length]);
  


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
