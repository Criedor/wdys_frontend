import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation'
import Entry from './components/Entry'
import Modal from './components/modal/Modal'
import Dashboard from './components/dashboard/Dashboard'
import TranslatorsDashboard from './components/dashboard/translatorDashboard/TranslatorDashboard'
// import Sidebar from './components/dashboard/sidebar/Sidebar'
// import CrumbsAction from './components/dashboard/crumbsAction/CrumbsAction'
// import Project from './components/dashboard/project/Project'
// import ProjectDetails from './components/dashboard/projectDetails/ProjectDetails'
import './components/dashboard/Dashboard';
import './App.css';

const App = () => {

  

  // State for opening modal Login / Signup
  const [modal, setModal] = useState(false)

  const  handleModal = () => {
        setModal( !modal )
    }


  return (
    <div className="App">
      <Navigation openModal={handleModal} />
      <Switch>

        {/* Translator's section */}
        <Route path='/translators' render={props => <TranslatorsDashboard {...props} />} />


        {/* Translation Manager's section */}
        <Route path='/projects' render={props => <Dashboard {...props} />} />

        {/* Entry page */}

        <Route exact path='/' render={props => <Entry openModal={handleModal} {...props} />} >
          {(modal) ? <Modal openModal={handleModal} /> : null}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
