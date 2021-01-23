import React from "react";
import PieChart from "./PieChart";
import Progressbar from "./Progressbar";
import { Grid, Divider, Typography } from "@material-ui/core";
import { useStyles } from "./JssStyleSheet/JssSkill";

const Skills = (props) => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.skills}>
        <Divider className={classes.divider} style={{ marginTop: "10px" }} />
        <Typography className={classes.header}>Skills</Typography>
        <Divider className={classes.divider} style={{ marginBottom: "20px" }} />
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.pieBody}>
            <PieChart />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.barBody}>
            <Progressbar />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Skills;
