import React from 'react';
import './Modal.css';



const DeleteProject = ({ openModal }) => {

  return (
    <>
      <div className='center'>
        <form action='#' method='POST'>
            <h2 className='mt-0'>Delete </h2>
            
            <strong>Deleted projects cannot be restored.</strong>
            <p className='message'>Are you sure you want to delete the project?</p>
            <div className='flex-inline'>
              <button className='action danger w205'>Delete</button>
              <button className='action blue w205' onClick={() => openModal(0,1)}>Cancel</button>
            </div>
            
        </form>
      </div>
    </>

  );
}

export default DeleteProject;