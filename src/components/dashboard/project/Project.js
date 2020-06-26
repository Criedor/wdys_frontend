import React from 'react';
import CardProjects from '../cards/CardProjects'
import './Project.css';



const Project = () => {
  return (

    <div className='body-project'>
        <CardProjects />
        <CardProjects />
        <CardProjects />
    </div>

  );
}

export default Project;