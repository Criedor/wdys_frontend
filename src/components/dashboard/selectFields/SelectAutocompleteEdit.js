/* eslint-disable no-use-before-define */
import React, {useContext} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import UserContext from '../../../contexts/UserContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));


const SelectAutocompleteEdit = ({ id, getLangs, projectlangs }) => {
  const {langs} = useContext(UserContext)
  const classes = useStyles();
  

  return (
    
    <div className={classes.root}>
      <Autocomplete
        multiple
        id={id}
        options={langs.map((option) => option.langname)}
        defaultValue={projectlangs}
        freeSolo={false}
        onChange={(e,l)=>{;getLangs(l)}}
        renderTags={(value, getTagProps) =>
          value.map((option, index) =>  
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })}/>
          )
        }
        renderInput={(params) => (
          <TextField  {...params} variant="standard" placeholder="search" />
        )}
      />
    </div>
    
  );
}



export default SelectAutocompleteEdit