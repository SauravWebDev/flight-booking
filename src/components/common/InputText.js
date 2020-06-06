import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const InputText = ({ label, autoComplete, required, type, autoFocus, ref }) => {
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        defaultValue=""
        required={required}
        fullWidth
        label={label}
        type={type}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        inputRef={ref}
      />
    </>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  ref: PropTypes.object,
};

export default InputText;
