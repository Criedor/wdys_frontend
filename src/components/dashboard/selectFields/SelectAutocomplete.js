/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 320,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const SelectAutocomplete = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={languages.map((option) => option.lang)}
        // defaultValue={[languages[1].lang]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="filled" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="standard" placeholder="search" />
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