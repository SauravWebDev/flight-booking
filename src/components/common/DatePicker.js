import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function DatePicker({ labelName, name, refr, hasError }) {
  const classes = useStyles();

  return (
    <>
      <TextField
        label={labelName}
        type="date"
        name={name}
        inputRef={refr}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {hasError && (
        <FormHelperText style={{ color: "red" }}>
          This is required!
        </FormHelperText>
      )}
    </>
  );
}

DatePicker.propTypes = {
  labelName: PropTypes.string.isRequired,
  refr: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
