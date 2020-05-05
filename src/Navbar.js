import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Transition } from 'react-transition-group';
// import { Link } from 'react-router-dom';
import ContactMeForm from './ContactMeForm';
import MobileNavMenu from './MobileNavMenu';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  transNavbar: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 'auto',
    textAlign: 'left',
    transition: '0.25s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  navbar: {
    width: '100%',
    height: '50px',
    position: 'fixed',
    left: 0,
    top: 0,
    // bottom: 0,
    right: 0,
    bottom: 'auto',
    textAlign: 'left',
    transition: '0.25s',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    zIndex: 1000,
    backgroundColor: '#394c4e',
    borderBottom: '2px solid #b9a61c',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
  },

  wContainer: {
    height: '100%',
    // margin: '0 auto',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    '&:after': {
      content: '',
      display: 'block',
      clear: 'both',
    },
  },

  transButton: {
    transition: '0.5s',
    fontFamily: '"Mada", sans-serif',
    color: 'white',
    fontSize: '20px',
    fontWeight: "normal",
    margin: '0px 20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },
  button: {
    transition: '0.5s',
    fontFamily: '"Mada", sans-serif',
    color: 'white',
    fontSize: '20px',
    fontWeight: "normal",
    margin: '0px 20px',
    '&:hover': {
      color: '#e31b6d',
    },
  },
  buttonContainer: {
    height: '50px',
    float: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '25px',
  },

  center: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //for mobile view
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: '100%',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileNav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '60px',
    alignItems: 'center',
    paddingLeft: '10px',
  },
  mobileOverlay: {
    opacity: 0,
    padding: theme.spacing(2),
    height: '90vh',
    width: '100%',
    position: 'fixed',
    zIndex: 1100,
    left: 0,
    top: 0,
    backgroundColor: theme.palette.background.default,
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
  },
}));

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const NewNavbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [trans, setTrans] = useState(props.default === false ? false : true);
  const initialPos = useRef(window.pageYOffset);
  const changed = useRef(false);
  const navRef = useRef(null);
  const navOffset = useRef(0);

  const [mobileOverlay, setMobileOverlay] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > initialPos.current && !changed.current) {
      changed.current = true;
      setTrans(false);
    } else if (initialPos.current === currentScrollPos && changed.current) {
      changed.current = false;
      setTrans(true);
    }
  };

  useEffect(() => {
    if (props.default === false) return;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.default]);

  useEffect(() => {
    navOffset.current = navRef.current.offsetHeight;
  }, []);

  return (
    <Fragment>
      <div
        className={trans ? classes.transNavbar : classes.navbar}
        id="1"
        ref={navRef}
      >
        <div className={classes.sectionMobile}>
          <div className={classes.mobileNav}>
            <IconButton onClick={props.scrollToTop}>
              <HomeIcon
                className={trans ? classes.transButton : classes.button}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                setMobileOverlay((mobileOverlay) => !mobileOverlay);
              }}
            >
              <MenuIcon
                className={trans ? classes.transButton : classes.button}
              />
            </IconButton>
          </div>
        </div>
        <div className={classes.sectionDesktop}>
          <div className={classes.wContainer}>
            <div className={classes.buttonContainer}>
              <Button
                className={trans ? classes.transButton : classes.button}
                style={{ marginLeft: '80px' }}
                onClick={props.scrollToTop}
              >
                Home
              </Button>

              <Button
                className={trans ? classes.transButton : classes.button}
                onClick={props.scrollToSkills}
              >
                Skills
              </Button>

              <Button
                className={trans ? classes.transButton : classes.button}
                onClick={props.scrollToResources}
              >
                Projects
              </Button>

              <Button
                className={trans ? classes.transButton : classes.button}
                onClick={() => setOpen(true)}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Transition in={mobileOverlay} timeout={500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
              display: mobileOverlay ? 'block' : 'none',
            }}
            className={classes.mobileOverlay}
          >
            <MobileNavMenu
              setMobileOverlay={setMobileOverlay}
              setScrollToResources={props.scrollToResources}
              setScrollToSkills={props.scrollToSkills}
            />
          </div>
        )}
      </Transition>
      <ContactMeForm open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default NewNavbar;
