import React, { Fragment } from "react";
import classes from "./input.module.css";
import { FormControl, FormLabel, TextField } from "@mui/material";

const Input = (props) => {
  const { label, onChange, id, ...inputs } = props;
  return (
    <Fragment>
      <FormControl>
        <FormLabel className={classes.label} htmlFor={props.label}>
          {props.label}
        </FormLabel>
        <TextField
          className={classes.input}
          InputProps={{ sx: { borderRadius: 30 } }}
          variant="outlined"
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          onChange={onChange}
          {...inputs}
        />
      </FormControl>
    </Fragment>
  );
};

export default Input;
