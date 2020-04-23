import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MyPicture from "./assests/Git.jpg";
const useStyles = makeStyles((theme) => ({

  text: {
    textAlign: "left",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    textTransform: "uppercase",
    fontSize: "25px",
    display: "flex",
  },

  aboutme: {
    backgroundColor: "#fb7664",
    fontWeight: 900,
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    margin: "150px 550px 150px 40px",
    padding: "10px",
    textAlign: "left",
    color: "white",
    fontSize: "45px",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  text2:{

    fontSize:"20px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    backgroundColor:"#5b5b5b",
    border: "3px solid #7d7d7e",
    color:"white",
    fontWeight:"bold"
  },
  charts: {
    borderBottom: "4px solid rgba(0, 0, 0, 0.25)",
    color: "black",
    textAlign: "center",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontSize: "20px",
    padding: "20px 0px 10px 0px",
    margin: "0px 60px 40px 10px",
    fontWeight: "bold",
  },
  typo: {
    
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div style={{overflow:"hidden"}}>
      <section>
        <Grid container spacing={7}>
          <Grid item xs={6} style={{ backgroundColor: "blue" }}>
            <img src={MyPicture} style={{ height: "100vh" }}></img>
          </Grid>

          <Grid item xs={6}>
            <div>
                 <p className={classes.aboutme} style={{margin:"10px 5px"}}>About Me</p>

                <div className={classes.text2} >
                <p style={{margin:"10px 5px"}}>Aruni Patel- Java and React Developer</p>
                </div>
                
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default AboutMe;


