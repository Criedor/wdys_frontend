import React, {useContext} from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { Folder } from '@material-ui/icons';
import Translate from '@material-ui/icons/Translate';
import UserContext from '../../../contexts/UserContext'
import './Sidebar.css';


const Sidebar = () => {
  const {role} = useContext(UserContext)

  let matchTranslation = useRouteMatch('/translators')
  let matchProjects = useRouteMatch('/projects')
  
  return (
    <>
    {role==="0"?
    <div className='sidebar'>
      <Link to='/projects'>
        <div className={`sidebar-button ${(matchProjects)?'active':''}`}>
            <Folder style={{marginRight: '0.5em'}}/>
            Projects
        </div>
        </Link>
        <Link to='/translators'>
          <div className={`sidebar-button ${(matchTranslation)?'active':''}`}>
              <Translate style={{marginRight: '0.5em'}}/>
              Translators
          </div>
        </Link>
    </div>
    :""}
  </>
  );
}

export default Sidebar;