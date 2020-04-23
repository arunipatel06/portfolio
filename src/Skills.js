import React from "react";
import PieChart from "./PieChart";
import Progressbar from "./Progressbar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewNavbar from "./NewNavbar";

const useStyles = makeStyles((theme) => ({

  skills: {
    height: "100vh",
    width: "100%",
    padding: "35px 20px",
    marginBottom: "100px",
    textAlign:"center"
  },

  header:{
    color: "black",
    fontWeight: 600,
    fontFamily: '"Manrope", sans-serif',
    fontSize: "50px",
    lineHeight: "30px",
    justifyContent: "center",
    margin: "80px 40px", 
    
  }

}));

const Skills = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <NewNavbar />
      </div>
      <section className={classes.skills}>
        <div className={classes.header}>Skills</div>
        <Grid container>
          <Grid item xs={12} md={6} style={{ padding: "0px 50px 0px 100px" }}>
            <div style={{ maxWidth: "500px" }}>
              <PieChart />
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "17px 100px 0px 50px" }}>
            <Progressbar />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Skills;
