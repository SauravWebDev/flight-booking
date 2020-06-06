import React from "react";
import PropTypes from "prop-types";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

export default function SingleSelect({
  labelName,
  name,
  selectedValue,
  inputItems,
  autoFocus,
  required,
  refr,
  hasError,
}) {
  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id={labelName}>{labelName}</InputLabel>
        <Select
          name={name}
          defaultValue={""}
          value={selectedValue}
          autoFocus={autoFocus}
          inputRef={refr}
          required={required}
        >
          {Object.keys(inputItems).map((item) => (
            <MenuItem key={item} value={item}>
              {inputItems[item]}
            </MenuItem>
          ))}
        </Select>
        {hasError && (
          <FormHelperText style={{ color: "red" }}>
            This is required!
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}

SingleSelect.propTypes = {
  labelName: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  inputItems: PropTypes.object.isRequired,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
  refr: PropTypes.object,
  required: PropTypes.bool,
  FormHelperText: PropTypes.bool,
  hasError: PropTypes.bool,
};
