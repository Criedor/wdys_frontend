import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, Select } from '@material-ui/core';



const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiInputBase-root': {
      fontFamily: "'Montserrat', sans-serif",
      paddingTop: '1em',
      width: 320,
      // fontWeight: 700,
      // height: 40,
    },
    '.MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '.MuiInput-underline:after': {
        borderBottom: '1px solid #000000'
    },
    '.MuiMenuItem-root': {
      fontFamily: "'Montserrat', sans-serif",
      
    },
  },
})(() => null);

const names = [
    'Dutch',
    'English',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Xhosa',
    'Zulu',
];

 const SelectField = () => {

    const [language, setLanguage] = useState([]);

    const handleChange = (event) => {
        setLanguage(event.target.value);
      };
    
  return (
    <>
        <GlobalCss />
        <Select
            labelId="proj-translation-langs"
            id="proj-translation-langs-multiple"
            autoComplete
            multiple
            value={language}
            onChange={handleChange}
            //   input={<Input />}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

    </>
  );
}

export default SelectField