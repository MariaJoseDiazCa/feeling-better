import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(6),
      backgroundColor: "#ff96ad",
    },
  },
}));

const Phrase = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={3}></Paper>
      </div>
    </div>
  );
};

export default Phrase;
