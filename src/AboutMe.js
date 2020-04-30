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
    // marginBottom: '140px',
    justifyContent: 'center',
    width: '35%',
    textAlign: 'center',
    margin: '30px auto',
  },

  content: {
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: '25%',
    // height: '60px',
    // width: '60px',
    padding: '0px',
    margin: '10px',
    backgroundColor: '#8c8c8c',
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.content}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: '150px auto',
            }}
          >
            <Typography className={classes.title}>Hello! I'm Aruni</Typography>
            <Typography className={classes.aboutme}>
              I am a recent University Graduate living in Toronto. I have 1+
              years of experience in development and programming field. I am
              efficient and enthusiastic to collaborate with team by means of
              strong commitment.
            </Typography>
            <div>
              <Button
                variant="contained"
                style={{ '&:hover': { backgroundColor: '#555' } }}
              >
                <GetAppIcon
                  disableElevation={true}
                  style={{ fontSize: '30px', margin: '0px' }}
                />
                <Typography>Resume</Typography>
                <a
                  href="https://www.instagram.com/a_r_u_95/"
                  className={classes.anchor}
                ></a>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
