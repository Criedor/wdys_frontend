import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MoreVert from '@material-ui/icons/MoreVert';
import './Card.css';


const Card = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };

    const handleClose = () => {
        setAnchorEl(null);
        };
    
  return (

    <div className='card'>
        <div className='card-top'>
            James Scotch
            <Button 
                aria-controls="fade-menu" 
                aria-haspopup="true" 
                onClick={handleClick} 
                style={{padding: 0, minWidth: 0}}
            >
                <MoreVert style={{color: '#ffffff'}} />
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
        <div className='card-bottom'>
            <div className='project-info'>Languages: <span>German, Italian, Portuguese</span></div>
            <div className='project-info'>Email: <span>james.matthew.scotch@email.com</span></div>
        </div>
    </div>

  );
}

export default Card;