import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: 'left',
      fontFamily: '"Manrope",sans-serif',
      fontSize: '22px',
      lineHeight: '30px',
      fontWeight: 'normal',
      color: 'grey',
    },
    contentBody: {
      paddingBottom: '25px',
    },
    heading: {
      textAlign: 'left',
      fontFamily: '"Manrope",sans-serif',
      fontSize: '24px',
      lineHeight: '30px',
      fontWeight: 600,
      color: '#182153',
      paddingBottom: '5px',
      width: '94%',
    },
    heading1: {
      textAlign: 'center',
      fontFamily: '"Manrope", sans-serif',
      fontSize: '35px',
      lineHeight: '35px',
      display: 'flex',
      color: '#260859',
      justifyContent: 'center',
      margin: '30px 0px',
      [theme.breakpoints.up('sm')]: {
        margin: '50px 0px',
      },
    },
    divider: {
      height: '1px',
      backgroundColor: '#f0f2f5',
    },
  
    content: {
      fontStyle: 'italic',
      fontFamily: '"Manrope",sans-serif',
      fontSize: '20px',
      lineHeight: '25px',
      fontWeight: 'normal',
      color: '#182153',
      paddingBottom: '10px',
      width: '96%',
    },
    paragraph: {
      textAlign: 'left',
      paddingBottom: '5px',
      maxWidth: '84%',
      color: '#182153',
    },
    icons: {
      color: '#fcc93a',
      fontSize: '25px',
    },
    container: {
      textAlign: 'center',
      justifyContent: 'center',
    },
  }));