import React, { Fragment } from 'react';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  navbar: {
    width: '100%',
    height: '50px',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    borderBottom: '4px solid #04c2c9',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
    textAlign: 'left',
    transition: '0.5s',
    cursor: 'pointer',
    // border-bottom: '3px solid #04c2c9',
    zIndex: 99,
    
  },
  containernNav: {
    // padding: theme.spacing(1, 3),
    display: 'block',
    margin: '0 auto',
    height: '100%',
  },
  wContainer: {
    // maxWidth: '1500px',
    height: '100%',
    margin: '0 auto',
    '&:after': {
      content: '',
      display: 'block',
      clear: 'both',
    },
    backgroundColor: '#1b242f'
  },
  navLogo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    float: 'left',
    textDecoration: 'none',
  },
  navMenu: {
    clear: 'none',
  },

  button: {
    // textTransform: 'none',
    transition: '0.5s',
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: '20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },
  buttonBottomNav: {
    margin: '0px 20px',
    
    //  fontWeight: '500'
  },
  buttonContainer: {
    //paddingRight: theme.spacing(1),
    height: '60px',
    float: 'left',
    //clear: 'none',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topNav: {
    // paddingRight: theme.spacing(1),
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  // sectionDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'block',
  //     background: 'green',
  //     height: '100%',
  //   },
  // },
  divider: {
    margin: theme.spacing(3, 0),
  },
  center: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

}));


const NewNavbar = props => {
  const classes = useStyles();
  return (
    <Fragment>
      <div
        className={classes.navbar}>
        <Divider />
        <div className={classNames(classes.containerNav, classes.wContainer)}>
          {/* <div className={classes.navMenu}> */}
          {/* <div className={classes.sectionDesktop}> */}
          <div className={classNames(classes.navLogo, classes.buttonBottomNav)}>
            {/* style={{ marginRight: '35px' }} */}
          </div>
          <div className={classes.buttonContainer}>
            <Button
              className={classNames( classes.button, classes.buttonBottomNav)}
              component={Link}
              to="/"
            >
            HOME
            </Button>

            <Button
              className={classNames( classes.button, classes.buttonBottomNav)}
              component={Link}
              to="/about"
            >
            ABOUT
            </Button>
            <Button
              className={classNames( classes.button, classes.buttonBottomNav )}
              component={Link}
              to="/about"
            >
            PROJECTS
            </Button>

            <Button
              className={classNames( classes.button, classes.buttonBottomNav )}
              component={Link}
              to="/contact/514"
            >
            CONTACT
            </Button>

          </div>
          {/* </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default NewNavbar;