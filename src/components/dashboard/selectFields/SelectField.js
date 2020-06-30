import React, { useState } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";

const lang = [
  "Dutch",
  "English",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Xhosa",
  "Zulu",
];

const SelectField = ({ id }) => {
  // console.log({selectField: id})

  const [languages, setLanguages] = useState(["Select a base language"]);

  console.log(languages);

  const handleChange = (event) => {
    setLanguages(event.target.value);
  };

  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <Select
          labelId={id}
          id={id}
          autoComplete="true"
          defaultValue={lang[1]}
          onChange={handleChange}
          // displayEmpty
          // displayEmpty='true'
          //   input={<Input />}
        >
          {lang.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectField;
