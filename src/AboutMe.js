import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "30px",
    lineHeight: "35px",
    display: "flex",
    color: "#260859",
    justifyContent: "center",
    margin: "60px 50px 35px 50px",
  },

  aboutme: {
    fontWeight: 100,
    fontFamily: '"Manrope", sans-serif',
    color: "#260859",
    fontSize: "20px",
    lineHeight: "30px",
    marginBottom: "100px",
    justifyContent: "center",
    width:"35%",
    textAlign:"center",
    margin:"0px auto"
  },

  content: {
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    justifyContent: "center",
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.content}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography className={classes.title}>Hello! I'm Aruni</Typography>
            <Typography className={classes.aboutme}>
              I am a recent University Graduate living in Toronto. I have
              1+ years of experience in development and programming field. I am efficient and
              enthusiastic to collaborate with team by means of strong
              commitment.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
