import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVert from '@material-ui/icons/MoreVert';
import SelectFields from '../selectFields/SelectField'
import './ProjectDetails.css';

{/* <label>Translation Language(s) * </label>
<select multiple>
  <option value='English'>English</option>
  <option value='Dutch'>Dutch</option>
  <option value='French'>French</option>
  <option value='German'>German</option>
  <option value='Italian'>Italian</option>
  <option value='Portuguese'>Portuguese</option>
</select>
<input type='text' value='English' placeholder='Select base language' /> */}


const ProjectDetails = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      };

  const handleClose = () => {
      setAnchorEl(null);
      };
  
  return (
        <div className='body-project-details'>
          <div className='col-left-380'>
            <div className='title-gray'>
                Project Name
                <Button 
                  aria-controls="fade-menu" 
                  aria-haspopup="true" 
                  onClick={handleClick} 
                  style={{padding: 0, minWidth: 0}}
                >
                  <MoreVert style={{color: '#000000'}} />
                </Button>
              <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
              >
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </div>
            <div className='col-left-info'>
               
              <label>Base Language </label>
              <input type='text' defaultValue='English' placeholder='Select base language' />
              <SelectFields />
              
            </div>
            </div>
            <div className='title-gray'>
              Project pages
            </div>
        </div>
  );
}

export default ProjectDetails;