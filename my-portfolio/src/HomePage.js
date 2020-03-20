import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Background from "./assests/homeImage.jpg";
import "typeface-roboto";
import './HomePage.css';
import Skills from "./Skills";


const useStyles = makeStyles(theme => ({

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
    width: '100%',
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // margin: "0px",
    padding: '0px'
  },
}));

const HomePage = props => {
  const classes = useStyles();

  return (
    
    <div>
      <Grid item xs={12}>
      <section className={classes.homeImage}>
      <div>
        <p className={classes.homeContent}>
          Hello I'm 
          <span className={classes.typo}>Aruni Patel</span>.

        </p>
        <p className={classes.homeContent}>
        I'm Web Developer.
        </p>
        
        <div className="homeWork" style={{"&:hover":{backgroundColor:"#555"}}}>
          View my work
          <ArrowForwardIcon className="Arrow" style={{position: "absolute", color: "white", fontSize: "30", right:"25px" }} />
        </div>
      </div>
    </section>
    </Grid>
    
    {/* <div><NewNavbar /></div> */}
    <div><Skills /></div>
    </div>
  );
  
};

export default HomePage;
