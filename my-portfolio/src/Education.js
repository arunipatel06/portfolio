import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewNavbar from "./NewNavbar";
import LensRoundedIcon from "@material-ui/icons/LensRounded";
import SimpleCard from "./education/Card";

const usestyles = makeStyles(theme => ({
  page: {
    height: "100vh",
    width: "100%",
    backgroundColor: "white",
    padding: "35px 20px"
  },
  title: {
    textAlign: "left",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    textTransform: "uppercase",
    fontSize: "30px",
    fontWeight: "bold",
    color: "grey",
    margin: "45px 10px"
  },
  border: {
    borderLeft: "5px solid #fcc93a",
    margin: "0px 0px 0px 20px ",
    height: "3"
    // padding:"30px"
  },
  icons: {
    position: "absolute",
    display: "flex",
    justify: "flex-end",
    color: "#fcc93a",
    fontSize: "30px",
    margin: "0px 0px 40px 0px"
    // border: "3px solid grey",
    // borderRadius: "50%"

  },
  container: {
    width: "fit-content",
    position: "relative",
    margin: "40px 0px 0px 0px"

  },

  contentContainer: {
    // border:"3px solid Grey",
    margin: "30px 0px 0px 0px"
  },
  heading: {
    textAlign: "left",
    fontSize: "20px",
    margin: "0px 0px 0px 35px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    borderBottom: "3px solid #fcc93a",
    width:"200px",
    padding:"0px 60px 10px 60px "
  },
  year: {
    fontFamily: "Helvetica Neue Helvetica Arial",
    fontSize: "15px",
    color: "grey",
    fontStyle: "bold"
  },

  degree: {
    fontStyle: "italic",
    margin: "10px 0px 10px 15px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  }
}));
const Education = props => {
  const classes = usestyles();

  return (
    <div>
      <div>
        <NewNavbar />
      </div>
      <section className={classes.page}>
        <h1 className={classes.title}>Education</h1>
        <Grid container>
          <Grid item xs={3}>
            <div className={classes.container}>
              <LensRoundedIcon className={classes.icons} />
              <span className={classes.heading}>Masters</span>
            </div>
          </Grid>

          <Grid item xs={9}>
            <div className={classes.contentContainer}>
              <SimpleCard />
            </div>
            <div className={classes.contentContainer}></div>
          </Grid>

          <Grid item xs={3}>
            <div className={classes.container}>
              <LensRoundedIcon className={classes.icons} />
              <span className={classes.heading}>Bachelors</span>
            </div>
          </Grid>

          <Grid item xs={9}>
            <div className={classes.contentContainer}>
              <SimpleCard />
            </div>
            <div className={classes.contentContainer}>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Education;
