import React, { useContext } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import UserContext from '../../../contexts/UserContext'


const SelectFieldTranslationPages = ({ id,selectedTranslationPage }) => {
  const {assignTranslatorTranslationPages } = useContext(UserContext)

  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <Select
          labelId={id}
          id={id}
          autoComplete="true"
          defaultValue=""
          onChange={(e,c)=>selectedTranslationPage(e.currentTarget.id)}
        >
          {assignTranslatorTranslationPages.map((page) => (
            <MenuItem key={page.pagename} value={page.pagename} id={page._id}>
              {page.pagename}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectFieldTranslationPages;
