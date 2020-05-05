import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, Divider } from '@material-ui/core';
import ContactMeForm from './ContactMeForm';
//Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const usestyles = makeStyles((theme) => ({
  icons: {
    fontSize: '40px',
    width: '5em',
    height: '7em',
    margin: '15px',
  },
  div: {
    [theme.breakpoints.up('sm')]: {
      margin: '30px',
    },
  },
  text: {
    margin: '100px auto 0px',
    textAlign: 'center',
    fontFamily: '"Manrope", sans-serif',
    fontSize: '60px',
    fontWeight: 500,
    color: '#1b242f',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#c7ced9',
    height: '400px',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  circle: {
    borderRadius: '60%',
    height: '60px',
    width: '60px',
    padding: '0px',
    margin: '10px',
  },
  contactButton: {
    fontFamily: 'sans-serif',
    padding: '2px 27px',
    textTransform: 'none',
    fontSize: '19px',
    borderRadius: '25px',
    margin: '10px auto',
  },
  divider: {
    height: '2px',
    backgroundColor: '#e0e0e0',
    width: '80%',
    marginTop: '20px',
  },
}));
const Footer = (props) => {
  const classes = usestyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Grid item={12}>
        <section className={classes.body}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography className={classes.text}>Thank You </Typography>
            <Button
              variant="contained"
              endIcon={<MailOutlineRoundedIcon />}
              className={classes.contactButton}
              size="large"
              onClick={() => setOpen(true)}
            >
              Contact Me
            </Button>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.div}>
            <Button
              variant="contained"
              className={classes.circle}
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/aruni-patel-541b94164/'
                )
              }
            >
              <LinkedInIcon
                disableElevation={true}
                style={{ fontSize: '40px', margin: '0px' }}
              />
            </Button>

            <Button
              variant="contained"
              className={classes.circle}
              onClick={() => setOpen(true)}
            >
              <MailOutlineRoundedIcon
                disableElevation={true}
                style={{ fontSize: '40px', margin: '0px' }}
              />
            </Button>

            <Button
              variant="contained"
              className={classes.circle}
              onClick={() => window.open('https://github.com/arunipatel06')}
            >
              <GitHubIcon
                disableElevation={true}
                style={{ fontSize: '40px', margin: '0px' }}
              />
            </Button>

            <Button
              variant="contained"
              className={classes.circle}
              onClick={() =>
                window.open(
                  'https://instagram.com/a_r_u_95?igshid=5dlmm61o46gw'
                )
              }
            >
              <InstagramIcon
                disableElevation={true}
                style={{ fontSize: '40px', margin: '0px' }}
              />
            </Button>
          </div>
        </section>
      </Grid>
      <ContactMeForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default Footer;
