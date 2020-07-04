import React, { useContext } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import UserContext from '../../../contexts/UserContext'


const SelectField = ({ id }) => {
  const {langs} = useContext(UserContext)

  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <Select
          labelId={id}
          id={id}
          autoComplete="true"
          defaultValue={langs[0].langname}
        >
          {langs.map((name) => (
            <MenuItem key={name.lang} value={name.langname}>
              {name.langname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectField;
