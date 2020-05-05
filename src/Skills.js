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
  },
  divider: {
    height: '1px',
    backgroundColor: '#f0f2f5',
    margin: '50px 0px',
  },
}));

const Skills = (props) => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.skills}>
        <Divider className={classes.divider} />
        <Typography className={classes.header}>Skills</Typography>
        <Divider className={classes.divider} />
        <Grid container>
          <Grid item xs={12} md={6} style={{ padding: '0px 50px 0px 100px' }}>
            <div style={{ maxWidth: '500px' }}>
              <PieChart />
            </div>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '17px 100px 0px 50px' }}>
            <Progressbar />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Skills;
