import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Typography} from "@material-ui/core";

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: lighten("#007f79", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#007f79"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },

  aboutheader: {
    paddingBottom: "9px",
    margin: "40px 40px 20px 40px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    textTransform: "uppercase",
    fontSize: "18px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontStyle: "normal",
    lineHeight: "1.1",
    color: "Black",
    // margin: "auto",
    textAlign: "left"
  },

  section4: {
    padding: "0px 40px"
  },
  progresslist: {
    margin: "20px 0px"
  },

  progressclass: {
    fontSize: "14px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontStyle: "normal",
    color: "white",
    margin: "0px 0px 0px -1px",
    padding: "10px 60px 10px 0px",
    backgroundColor: "white"
  },
  text:{
    textAlign:"left",
    paddingLeft:"10px",
    fontSize:"15px",
    textTransform:"bold",
    color:"black"
  }

}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className={classes.progresslist}>
            <div className={classes.progressclass}>
              <Typography className={classes.text}> HTML </Typography>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="primary"
                value={80}
              />
            </div>

            <div className={classes.progressclass}>
            <Typography className={classes.text}> CSS </Typography>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={80}
              />
            </div>

            <div className={classes.progressclass}>
            <Typography className={classes.text}> React </Typography>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={60}
              />
            </div>

            <div className={classes.progressclass}>
            <Typography className={classes.text}> Java </Typography>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={90}
              />
            </div>

            <div className={classes.progressclass}>
            <Typography className={classes.text}> JavaScript </Typography>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={70}
              />
            </div>
          </div>
    </div>
  );
}