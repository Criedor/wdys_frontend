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


const SelectAutocomplete = ({ id, getLangs}) => {
  const {langs} = useContext(UserContext)
  const classes = useStyles();
  // console.log({selectAutocomplete: id})

  return (
    
    <div className={classes.root}>
      <Autocomplete
        multiple
        id={id}
        options={langs.map((option) => option.langname)}
        defaultValue={[langs[1].langname]}
        freeSolo
        onChange={(e,l)=>{getLangs(l)}}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField  {...params} variant="standard" placeholder="search" />
        )}
      />
    </div>
    
  );
}

const languages = [
    {lang:'Dutch'},
    {lang:'English'},
    {lang:'French'},
    {lang:'German'},
    {lang:'Italian'},
    {lang:'Portuguese'},
    {lang:'Xhosa'},
    {lang:'Zulu'},
];

export default SelectAutocomplete