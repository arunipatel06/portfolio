import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '38px',
    lineHeight: '35px',
    display: 'flex',
    color: '#260859',
    justifyContent: 'center',
    margin: '0px 50px',
  },

  aboutme: {
    fontWeight: 100,
    fontFamily: '"Manrope", sans-serif',
    color: '#260859',
    fontSize: '20px',
    lineHeight: '30px',
    justifyContent: 'center',
    width: '80%',
    textAlign: 'center',
    margin: '30px auto',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '35%',
    },
  },

  content: {
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: '25%',
    padding: '0px',
    margin: '10px',
    backgroundColor: '#8c8c8c',
  },
  cardButton: {
    fontFamily: 'sans-serif',
    margin: theme.spacing(1),
    padding: '2px 27px',
    textTransform: 'none',
    fontSize: '19px',
    borderRadius: '25px',
    color: '#260859',
  },
  aboutMeBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '50px auto',
    [theme.breakpoints.up('lg')]: {
      margin: '150px auto',
    },
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.content}>
          <div className={classes.aboutMeBody}>
            <Typography className={classes.title}>Hello! I'm Aruni</Typography>
            <Typography className={classes.aboutme}>
              I am a recent University Graduate living in Toronto. I have 1+
              years of experience in development and programming field. Eager to
              join your team for smooth product development. I am efficient and
              enthusiastic to collaborate with team by means of strong
              commitment.
            </Typography>
            <div>
              <Button
                variant="outlined"
                startIcon={<GetAppIcon />}
                className={classes.cardButton}
                size="large"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/open?id=1cowb0MoU3mPuY4coQfULbrucjXzyLqc-'
                  )
                }
              >
                Resume
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
