import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const Bar1 = withStyles({
  root: {
    height: 10,
    backgroundColor: '#77d1c7',
  },
  bar: {
    borderRadius: 25,
    backgroundColor: '#0e655b',
  },
})(LinearProgress);

const Bar2 = withStyles({
  root: {
    height: 10,
    backgroundColor: '#eeeab7',
  },
  bar: {
    borderRadius: 25,
    backgroundColor: '#a29d6b',
  },
})(LinearProgress);

const Bar3 = withStyles({
  root: {
    height: 10,
    backgroundColor: '#bac4b9',
  },
  bar: {
    borderRadius: 25,
    backgroundColor: '#868c85',
  },
})(LinearProgress);

const Bar4 = withStyles({
  root: {
    height: 10,
    backgroundColor: '#fccebd',
  },
  bar: {
    borderRadius: 25,
    backgroundColor: '#f87445',
  },
})(LinearProgress);

const Bar5 = withStyles({
  root: {
    height: 10,
    backgroundColor: '#ada9b8',
  },
  bar: {
    borderRadius: 25,
    backgroundColor: '#5d5572',
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  progresslist: {
    margin: '20px auto',
    width: '70%',
  },

  progressclass: {
    paddingTop: '10px',
    backgroundColor: 'white',
    // width:"70%"
  },
  text: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'left',
    paddingLeft: '10px',
    color: 'black',
  },
}));

export default function Progressbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.progresslist}>
        <div className={classes.progressclass}>
          <Typography className={classes.text}> Java </Typography>
          <Bar1 className={classes.margin} variant="determinate" value={80} />
        </div>

        <div className={classes.progressclass}>
          <Typography className={classes.text}> JavaScript </Typography>
          <Bar2 className={classes.margin} variant="determinate" value={70} />
        </div>

        <div className={classes.progressclass}>
          <Typography className={classes.text}> Data Structures </Typography>
          <Bar3 className={classes.margin} variant="determinate" value={60} />
        </div>

        <div className={classes.progressclass}>
          <Typography className={classes.text}> MYSQL </Typography>
          <Bar4 className={classes.margin} variant="determinate" value={80} />
        </div>

        <div className={classes.progressclass}>
          <Typography className={classes.text}> React </Typography>
          <Bar5 className={classes.margin} variant="determinate" value={60} />
        </div>
      </div>
    </div>
  );
}
