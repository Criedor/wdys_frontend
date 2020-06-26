import React from 'react';
import Breadcrumbs from './Breadcrumbs'
import './CrumbsAction.css';


const CrumbsAction = () => {
  
  return (

    <div className='body-head'>
      <Breadcrumbs />
      <div className='add-button'>+</div>
    </div>

  );
}

export default CrumbsAction;