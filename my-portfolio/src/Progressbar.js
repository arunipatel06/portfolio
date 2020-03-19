import React from "react";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    margin: "40px 0px 20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
    textTransform: "uppercase",
    fontSize: "18px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontStyle: "normal",
    lineHeight: "1.1",
    color: "Black",
    // margin: "auto",
    textAlign: "center"
  },
  section4: {
    padding: "0px 10px"
  },
  progresslist: {
    margin: "20px 0px"
  },

  progressclass: {
    fontSize: "14px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontStyle: "normal",
    color: "white",
    margin: "0px 0px -1px",
    padding: "10px 15px",
    backgroundColor: "#7FB0A6"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8} style={{ backgroundColor: "red" }}>
        <h4 className={classes.aboutheader}>Skills Distribution</h4>
        </Grid>
        <Grid item xs={4}>
          <h4 className={classes.aboutheader}>Skills</h4>
          <div className={classes.progresslist}>
            <div className={classes.progressclass}>
              <div>1</div>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </div>

            <div className={classes.progressclass}>
              <div>2</div>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </div>

            <div className={classes.progressclass}>
              <div>3</div>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </div>

            <div className={classes.progressclass}>
              <div>4</div>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </div>

            <div className={classes.progressclass}>
              <div>5</div>
              <BorderLinearProgress
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}