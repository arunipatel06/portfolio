import React from 'react';
import PieChart from './PieChart';
import Progressbar from './Progressbar';
import { Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skills: {
    textAlign: 'center',
  },

  header: {
    textAlign: 'center',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '35px',
    lineHeight: '35px',
    color: '#260859',
    justifyContent: 'center',
    display: 'flex',
    margin: '30px 0px',
    [theme.breakpoints.up('sm')]: {
      margin: '50px 0px',
    },
  },
  divider: {
    height: '1px',
    backgroundColor: '#f0f2f5',
  },
  pieBody: {
    [theme.breakpoints.up('sm')]: {
      padding: '0px 150px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 50px 0px 250px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0px 0px 0px 350px',
    },
  },
  barBody: {
    [theme.breakpoints.up('sm')]: {
      padding: '0px 100px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '17px 100px 0px 0px',
    },
  },
}));

const Skills = (props) => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.skills}>
        <Divider className={classes.divider} style={{ marginTop: '10px' }} />
        <Typography className={classes.header}>Skills</Typography>
        <Divider className={classes.divider} style={{ marginBottom: '20px' }} />
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
