import React, { useState, useEffect, Fragment } from 'react';
import {
  IconButton,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Divider,
  Modal,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

//Images
import contactForm from './assests/contactForm.jpg';

//Icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import EmailIcon from '@material-ui/icons/Email';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import { Clear } from '@material-ui/icons';
require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
  },
  body: {
    position: 'relative',
    width: '365px',
    backgroundColor: theme.palette.background.default,
    margin: '100px auto 0px',
    outline: 0,
    overflowY: 'hidden',
    [theme.breakpoints.up('md')]: {
      width: '900px',
    },
  },
  formContainer: {
    overflow: 'hidden',
    padding: '10px 50px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
  title: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '51px',
    color: '#1b242f',
  },
  mobileTitle: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: 500,
    fontSize: '22px',
    lineHeight: '24px',
    color: '#1b242f',
  },
  button: {
    color: 'white',
    background: 'black',
    padding: '10px 27px',
    textTransform: 'none',
    width: '250px',
  },
  left: {
    textAlign: 'left',
  },
  textTitle: {
    fontFamily: '"Mada", sans-serif',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '28px',
    margin: '0px 0px 10px 0px',
    color: '#1b242f',
  },
  TextField: {
    fontFamily: 'sans-serif',
    width: '100%',
  },
  mobileOverlay: {
    padding: 0,
    height: '90vh',
    width: '100%',
    position: 'fixed',
    zIndex: 1100,
    left: 0,
    top: 0,
    backgroundColor: theme.palette.background.default,
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.3)',
  },
  mobileInput: {
    height: '80%',
  },
  contactImage: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const ContactMeForm = ({ open, setOpen }) => {
  const classes = useStyles();

  const [state, setState] = useState({
    fullName: '',
    emailAddress: '',
    message: '',
  });

  const [error, setError] = useState({
    params: {
      fullName: false,
      emailAddress: false,
      message: false,
    },
    messages: {
      fullName: '',
      emailAddress: '',
      message: '',
    },
  });

  const [showDialog, setShowDialog] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [formSuccess, setFormSuccess] = useState(true);

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        'jaydeepvachhani2@gmail.com',
        templateId,
        variables,
        process.env.REACT_APP_USERKEY_EMAILJS
      )
      .then((res) => {
        setFormLoading(false);
        setFormSuccess(false);
        console.log('Email successfully sent!');
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        setFormLoading(false);
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        );
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isValidEmail = (email) => {
    var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkValid = () => {
    const checkError = { ...error };
    // Check each params
    for (const [key, value] of Object.entries(state)) {
      let valid = value.trim() ? true : false;
      if (key === 'emailAddress') {
        valid = isValidEmail(value);
      }

      checkError.params[key] = !valid;
      if (!valid) {
        const message = 'This field is not valid';
        checkError.messages[key] = message;
      }
    }
    setError({ ...checkError });

    for (var key in checkError.params) {
      if (checkError.params[key]) return false;
    }
    return true;
  };

  const submitContactUs = () => {
    const valid = checkValid();
    if (!valid) {
      return;
    }
    const templateId = 'template_x66jiHpl';
    sendFeedback(templateId, {
      message_html: state.message,
      from_name: state.fullName,
      reply_to: state.emailAddress,
    });
    setShowDialog(true);
    setState({ fullName: '', emailAddress: '', message: '' });
  };

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
    setError({
      params: {
        fullName: '',
        emailAddress: '',
        message: '',
      },
      messages: {
        fullName: '',
        emailAddress: '',
        message: '',
      },
    });
  };

  const modal1 = (
    <Modal
      aria-labelledby="contact-us-modal"
      aria-describedby="contact-us-modal"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className={classes.body}>
        <IconButton
          onClick={() => setOpen(false)}
          style={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <Clear />
        </IconButton>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.header}>
              <div className={classes.title}>Contact Me</div>
            </div>
            <Divider />
            <div className={classes.formContainer}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitContactUs();
                }}
              >
                <Grid
                  container
                  spacing={1}
                  style={{ textAlign: 'center', overflow: 'hidden' }}
                >
                  <Grid className={classes.left} item xs={12}>
                    <div
                      className={classes.textTitle}
                      style={{ marginTop: '10px' }}
                    >
                      Full Name
                    </div>
                    <TextField
                      onChange={handleChange('fullName')}
                      error={error.params.fullName}
                      helperText={error.messages.fullName}
                      value={state.fullName}
                      className={classes.TextField}
                      placeholder="Please enter your name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle}>Email</div>
                    <TextField
                      className={classes.TextField}
                      onChange={handleChange('emailAddress')}
                      value={state.emailAddress}
                      error={error.params.emailAddress}
                      helperText={error.messages.emailAddress}
                      placeholder="Please enter email"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid className={classes.left} item xs={12}>
                    <div className={classes.textTitle}>Message</div>
                    <TextField
                      className={classes.TextField}
                      onChange={handleChange('message')}
                      value={state.message}
                      error={error.params.message}
                      helperText={error.messages.message}
                      placeholder="Please enter your message"
                      multiline
                      rows="4"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: '15px' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.button}
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid item xs={12} md={6} className={classes.contactImage}>
            <img
              alt="Revre"
              src={contactForm}
              style={{ height: '100%', width: '100%' }}
            />
          </Grid>
        </Grid>
      </div>
    </Modal>
  );

  const progress = (
    <Dialog
      onClose={() => {
        setShowDialog(false);
      }}
      open={showDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{'Processing... '}</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: 'center', margin: '10px auto' }}>
          {formLoading ? (
            <CircularProgress />
          ) : formSuccess ? (
            <CancelIcon style={{ fontSize: '50px', color: 'red' }} />
          ) : (
            <CheckCircleOutlineIcon
              style={{ fontSize: '50px', color: 'green' }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <Fragment>
      {modal1}
      {progress}
    </Fragment>
  );
};

export default ContactMeForm;
