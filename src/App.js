import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Navigation from './components/navigation/Navigation'
import Entry from './components/Entry'
import Modal from './components/modal/Modal'
import Dashboard from './components/dashboard/Dashboard'
import TranslatorsDashboard from './components/dashboard/translatorDashboard/TranslatorDashboard'
import './components/dashboard/Dashboard';
import './App.css';

// Global styling for MUI componets found in components/dashboard/selectFields directory
const GlobalCss = withStyles({
  '@global': {
    '.MuiInputBase-root': {
      fontFamily: "'Montserrat', sans-serif",
      paddingTop: '1em',
    },
    '.MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '.MuiInput-underline:after': {
        borderBottom: '1px solid #000000'
    },
    '.MuiMenuItem-root': {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
})(() => null);

const App = () => {

  // State for opening modal Login / Signup
  const [modal, setModal] = useState(false)
  const [modalOption, setModalOption] = useState(1)

  const  handleModal = (toggle, option) => {
      if (toggle === 1)
      {
        setModal(true)
      } else {
        setModal(false)
      }
        setModalOption(option)
        
    }


  return (
    <div className="App">
      <Navigation openModal={handleModal} />
      <GlobalCss />
      {(modal) ? <Modal openModal={handleModal} option={modalOption} /> : null}
      <Switch>

        {/* Translator's section */}
        <Route path='/translators' render={props => <TranslatorsDashboard {...props} />} />


        {/* Translation Manager's section */}
        <Route path='/projects' render={props => <Dashboard openModal={handleModal} {...props} />} >
        {/* {(modal) ? <Modal openModal={handleModal} option={modalOption} /> : null} */}
        </Route>


        {/* Entry page */}

        <Route exact path='/' render={props => <Entry openModal={handleModal} {...props} />} >
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
