import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Login from './Login'
import Signup from './Signup'
import DeleteProject from './DeleteProject'
import './Modal.css';



const Modal = ({ openModal, option }) => {

    const modalBkgImg = () => {
        if(option === 3 || option === 4) {
            return 'none'
        }
    }

console.log({theOption: option})
  return (

    <div className='modal'>
        <div className='modal-wrapper'>
            <div className={`modal-contain ${modalBkgImg()}`}>
                <div className='login-head'>
                    <CloseIcon onClick={() => openModal(0,1)} style={{cursor: 'pointer', color: '#ffffff'}}/>
                </div>
                <div className='login-body'>

                {(() => {switch (option) {
                    case 1: 
                        return <Login openModal={openModal} />
                    case 2:
                        return <Signup openModal={openModal} />
                    case 3:
                        return <DeleteProject openModal={openModal} />;
                    // case 4:
                    //     return <RemoveTranslator />;
                    default:
                        return  null
                }})()}
                </div>
            </div>
        </div>
    </div>

  );
}

export default Modal;