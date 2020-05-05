import { makeStyles } from '@material-ui/core/styles';
import Background from "../assests/Homepage.jpg";


export const useStyles = makeStyles((theme) => ({
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