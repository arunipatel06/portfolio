import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Background from "./assests/Homepage3.jpg";
import AvatarImage from "./assests/Git.jpg";
import "typeface-roboto";
import "./HomePage.css";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";


const useStyles = makeStyles((theme) => ({
  homeContent: {
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontStyle: "normal",
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "0px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  typo: {
    textAlign: "center",
    color: "white",
    fontSize: "45px",
    lineHeight: "50px",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    margin: "0px auto",
  },
  avatar: {
    height: theme.spacing(18),
    width: theme.spacing(18),
    border: "3px solid white",
    margin: "250px auto 0px",
  },

  homeImage: {
    height: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    background: 'linear-gradient(grey)',
    backgroundSize: "cover",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // margin: "0px",
    padding: "0px",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12}>
        <section className={classes.homeImage}>
          <div>
            <Avatar src={AvatarImage} className={classes.avatar} />
            <p className={classes.homeContent} style={{ fontSize: "25px" }}>
              My Name is
            </p>
            <p className={classes.typo}>Aruni Patel</p>
            <div
              className="homeWork"
              style={{ borderRadius:"25px" ,"&:hover": { backgroundColor: "#555" } }}
            >
              View my work
              <ArrowForwardIcon
                className="Arrow"
                style={{
                  position: "absolute",
                  color: "white",
                  fontSize: "30",
                  right: "25px",
                }}
              />
            </div>
          </div>
        </section>
      </Grid>
      <div>
        <Skills />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      >
        <Education />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
