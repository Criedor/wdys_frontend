import React, { useContext } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import UserContext from '../../../contexts/UserContext'


const SelectFieldTranslationPages = ({ id,selectedTranslationPage }) => {
  const {langs } = useContext(UserContext)

  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <Select
          labelId={id}
          id={id}
          autoComplete="true"
          defaultValue={langs[1].langname}
          >
          {langs.map((lang) => (
            <MenuItem key={lang.pagename} value={lang.langname} id={lang._id}>
              {lang.langname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectFieldTranslationPages;
