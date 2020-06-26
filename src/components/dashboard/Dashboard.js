import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import CrumbsAction from './crumbsAction/CrumbsAction';
import ProjectDetails from './projectDetails/ProjectDetails'
import Project from './project/Project'

import './Dashboard.css';


const Dashboard = () => {

    
  return (

    <div className='dashboard'>
        <Sidebar />
        <div className='body'>
            <CrumbsAction />
            <Switch>
              <Route exact path='/projects/:projID' render={props => <ProjectDetails {...props} />} />
              <Route exact path='/projects' render={props => <Project {...props} />} />
            </Switch>
        </div>
    </div>

  );
}

export default Dashboard;