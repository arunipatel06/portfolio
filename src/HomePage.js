import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, Divider } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Background from './assests/Homepage.jpg';
import AvatarImage from './assests/Git.jpg';
import 'typeface-roboto';
import './HomePage.css';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import NewNavbar from './Navbar';
import AboutMe from './AboutMe';

const useStyles = makeStyles((theme) => ({
  //--------------------
  root: {
    overflow: 'hidden',
  },
  avatar: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    border: '3px solid white',
    margin: '0px auto 20px',
  },
  upperTitle: {
    fontFamily: '"Raleway", sans-serif',
    fontStyle: 'normal',
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 600,
    color: '#f0f2f5',
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  titleName: {
    fontFamily: '"Raleway", sans-serif',
    fontStyle: 'normal',
    fontSize: '50px',
    lineHeight: '65px',
    fontWeight: 900,
    color: '#f0f2f5',
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '70px',
      lineHeight: '85px',
    },
  },
  subTitleName: {
    fontFamily: '"Mada", sans-serif',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '35px',
    fontWeight: 'normal',
    color: '#1b242f',
    margin: 'auto',
    textAlign: 'center',
  },
  typo: {
    textAlign: 'center',
    color: '#E31B6D',
  },
  homeImage: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0px',
  },
}));

const HomePage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NewNavbar />
      <Grid item xs={12}>
        <section className={classes.homeImage}>
          <div>
            <Avatar src={AvatarImage} className={classes.avatar} />
            <Typography varient="h3" className={classes.upperTitle}>
              MY NAME IS
            </Typography>
            <Typography varient="h3" className={classes.titleName}>
              ARUNI PATEL
            </Typography>
            <Divider style={{ height: '1px', backgroundColor: '#f0f2f5' }} />
            <Typography
              variant="h5"
              className={classes.upperTitle}
              style={{ marginTop: '10px' }}
            >
              DEVELOPER, CODER
            </Typography>
            <div
              className="homeWork"
              style={{
                borderRadius: '25px',
                margin: '20px auto 0px',
                '&:hover': { backgroundColor: '#555' },
              }}
            >
              View my work
              <ArrowForwardIcon
                className="Arrow"
                style={{
                  position: 'absolute',
                  fontSize: '20',
                  right: '35px',
                  top: '8px',
                }}
              />
            </div>
          </div>
        </section>
      </Grid>

      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
