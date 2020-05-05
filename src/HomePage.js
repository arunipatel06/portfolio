import React, { useEffect, useRef } from 'react';
import { Grid, Avatar, Typography, Divider } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AvatarImage from './assests/Git.jpg';
import 'typeface-roboto';
import './HomePage.css';
import Skills from './Skills';
import Education from './Education';
import NewNavbar from './Navbar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import {useStyles} from './JssStyleSheet/JssHomePage';

const HomePage = (props) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const resourcesRef = useRef(null);
  const scrollToResources = () => scrollToRef(resourcesRef);
  const skillsRef = useRef(null);
  const scrollToSkills = () => scrollToRef(skillsRef);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <NewNavbar
        scrollToResources={scrollToResources}
        scrollToSkills={scrollToSkills}
        scrollToTop={scrollToTop}
      />
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
              onClick={scrollToResources}
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
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={resourcesRef}>
        <Education />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
