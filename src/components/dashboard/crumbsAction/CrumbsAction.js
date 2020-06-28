import React from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs'
import './CrumbsAction.css';


const CrumbsAction = () => {

  let matchProjectCreate = useRouteMatch('/projects/create')
  let matchTranslatorCreate = useRouteMatch('/translators/create')
  let matchProjects = useRouteMatch('/projects')
  let matchTranslator = useRouteMatch('/translators')

  const handleAddButtonLink = () => {
    if (matchProjects) {
      return '/projects/create'
    } else if (matchTranslator) {
      return '/translators/create'
    }
  }
  
  return (

    <div className='body-head'>
      { (matchProjectCreate || matchTranslatorCreate) ? null : 
      <>
      <Breadcrumbs />
        <Link to={handleAddButtonLink} style={{textDecoration: 'none'}}>
          <div className='add-button'>+</div>
        </Link>
      </>
      }
    </div>

  );
}

export default CrumbsAction;