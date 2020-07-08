import React, { useContext } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import UserContext from '../../../contexts/UserContext'


const SelectFieldTranslator = ({ id, selectedTranslator }) => {
  const {assignTranslatorTranslators } = useContext(UserContext)

  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <Select
          labelId={id}
          id={id}
          autoComplete="true"
          defaultValue=""
          onChange={(e,c)=>selectedTranslator(c.props.id)}
        >
          {assignTranslatorTranslators.map((translator) => (
            <MenuItem key={translator._id} value={translator.displayname} id={translator._id}>
              {translator.displayname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectFieldTranslator;
