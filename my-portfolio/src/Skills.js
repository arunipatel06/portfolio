import React from 'react';
import PieChart from './PieChart';
import Progressbar from './Progressbar';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NewNavbar from "./NewNavbar";

const useStyles = makeStyles(theme => ({

    skills: {
        height: "100vh",
        width: '100%',
        textAlign: "center",
        fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
        textTransform: 'uppercase',
        fontSize: '40px',
        backgroundColor: "#7FB0A6",
        backgroundRepeat: "repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: 'white',
        padding:'35px 20px',
        
      },

      charts: {
         borderBottom: "4px solid rgba(0, 0, 0, 0.25)",
         color: 'white',
         textAlign:'left',
         fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
         fontSize: '20px',
         padding: '20px 0px 10px 0px',
         margin: '0px 60px 40px 10px',
         fontWeight:'bold',
      },
}));


const Skills = props =>{
    const classes = useStyles();

    return (
      <div >
        <div><NewNavbar /></div>
        <section className={classes.skills}>
          <div className={classes.skills}>Skills</div>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <h4 className={classes.charts}>Skills Distribution</h4>
              <PieChart />
            </Grid>
            <Grid item xs={4}>
              <h4 className={classes.charts}>Focus</h4>
                <Progressbar />
            </Grid>
          </Grid>
        </section>
      </div>
    );
};

export default Skills;