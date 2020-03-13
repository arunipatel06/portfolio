import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Background from "./assests/homeImage.jpg";
import "typeface-roboto";
import { Typography } from "@material-ui/core";
import './HomePage.css';

// const imagePath = process.env.PUBLIC_URL;

// const images = ["/assets/homeImage.jpg"];

const useStyles = makeStyles(theme => ({
  titledif: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "40px",
    marginTop: "70px",
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      fontWeight: "500",
      fontSize: "60px",
      lineHeight: "70px"
    }
  },
  homeContent: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontSize: "40px",
    color: "white",
    margin: "auto",
    textAlign: "center"
  },
  typo: {
    textAlign: "center",
    color: "#E31B6D"
  },
  
  homeImage: {
    height: "100vh",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0px"
  },
}));

const HomePage = props => {
  const classes = useStyles();

  return (
    <div className={classes.homeImage}>
      <div>
        <p className={classes.homeContent}>
          Hello I'm <span className={classes.typo}>Aruni Patel</span>.
        </p>
        <p className={classes.homeContent}>I'm Web Developer.</p>
        <div className="homeWork" style={{"&:hover":{backgroundColor:"#555"}}}>
          View my work
          <ArrowForwardIcon className="Arrow" style={{position: "absolute", color: "white", fontSize: "30", right:"25px" }} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
