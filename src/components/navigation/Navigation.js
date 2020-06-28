import React from 'react';
import './Navigation.css';
import { ReactComponent as Logo } from './wdys-logo.svg'



const Navigation = ({ openModal }) => {
  return (
    <div className="navbar">
        <div className='navbar-contain'>
        <div className='navbar-logo nav-btn'><Logo/></div>
        <div className='navbar-logger' onClick={() => openModal(1,1)}>Login</div>
        </div>
    </div>
  );
}

export default Navigation;