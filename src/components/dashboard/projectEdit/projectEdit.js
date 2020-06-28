import React, { useState } from 'react';
import MoreVert from '@material-ui/icons/MoreVert';
import SelectField from '../selectFields/SelectField'
import SelectAutocomplete from '../selectFields/SelectAutocomplete';
import DatePicker from '../selectFields/DatePicker';
import { Button, Menu, MenuItem, Fade, FormControl } from '@material-ui/core';
import '../Dashboard.css';

const ProjectEdit = () => {

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
              <form > 
              <FormControl >
                <div className='field-wrapper'>
                  <label htmlFor="proj-details-name">Project Name </label>
                  <input id="proj-details-name" className='custom-input' type='text' placeholder='Assign a project name' />
                </div>
              </FormControl>
              <FormControl >
                <div className='field-wrapper'>
                  <label htmlFor={'proj-details-base-lang'}>Base Language * </label>
                  <SelectField id={'proj-details-base-lang'} />
                </div>
                </FormControl>
                <FormControl >
                <div className='field-wrapper w-320'>
                  <label htmlFor={'proj-details-trans-lang'} >Translation Language(s) * </label>
                  <SelectAutocomplete id={'proj-details-trans-lang'}  />
                </div>
                </FormControl>
                <FormControl >
                <div className='field-wrapper'>
                  <label htmlFor={'proj-details-deadline'}>Deadline </label>
                  <DatePicker id={'proj-details-deadline'} />
                </div>
              </FormControl>
              </form>
            </div>
          </div>

            <div className='title-gray'>
              Project pages
            </div>
        </div>
  );
}

export default ProjectEdit;