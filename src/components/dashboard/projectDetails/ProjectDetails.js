import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVert from '@material-ui/icons/MoreVert';
import SelectFields from '../selectFields/SelectField'
import './ProjectDetails.css';
import SelectAutocomplete from '../selectFields/SelectAutocomplete';
import DatePicker from '../selectFields/DatePicker';
import { FormControl } from '@material-ui/core';

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
              <FormControl >
                <div className='field-wrapper'>
                  <label>Base Language </label>
                  <input className='custom-input' type='text' placeholder='Select base language' />
                </div>
                <div className='field-wrapper'>
                  <label>Select Language(s) * </label>
                  <SelectFields />
                </div>
                <div className='field-wrapper'>
                  <label>Select Language(s) * </label>
                  <SelectAutocomplete />
                </div>
                <div className='field-wrapper'>
                  <label>Deadline </label>
                  <DatePicker />
                </div>
              </FormControl>
            </div>
          </div>

            <div className='title-gray'>
              Project pages
            </div>
        </div>
  );
}

export default ProjectDetails;