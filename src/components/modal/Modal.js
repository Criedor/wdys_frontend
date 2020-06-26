import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Login from './Login'
import Signup from './Signup'
import './Modal.css';



const Modal = ({ openModal }) => {

    const [log, setLog] = useState(true)

    const handleLogin = () => {
        setLog( !log )
    }
  return (

    <div className='modal'>
        <div className='modal-wrapper'>
            <div className='modal-contain'>
                <div className='login-head'>
                    <CloseIcon onClick={() => openModal()} style={{cursor: 'pointer', color: '#ffffff'}}/>
                </div>
                <div className='login-body'>
                    {(log) ? <Login showLoginSignIn={handleLogin} /> : <Signup showLoginSignIn={handleLogin} />}
                </div>
            </div>
        </div>
    </div>

  );
}

export default Modal;