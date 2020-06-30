import React, { useContext } from 'react';
import './Navigation.css';
import { ReactComponent as Logo } from './wdys-logo.svg'
import ModalContext from '../../contexts/ModalContext'



const Navigation = () => {

  const { setModal, setModalOption } = useContext(ModalContext)
  return (
    <div className="navbar">
        <div className='navbar-contain'>
        <div className='navbar-logo nav-btn'><Logo/></div>
        <div className='navbar-logger' onClick={() => {setModal(1); setModalOption(1)}}>Login</div>
        </div>
    </div>
  );
}

export default Navigation;