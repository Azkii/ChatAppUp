import React from 'react'
import logo from '../graphic/logo.png'
import city from '../graphic/city.gif'  
//ui section
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const useStyles = makeStyles({
  button: {
    width: '35vw',
    height: '4.8vh',
    fontFamily: 'Archivo',
    fontSize: '3.5vw',
    boxShadow: '0px 0px 17px -1px rgba(0,0,0,0.3)',
  },
})
const theme = createMuiTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#f48fb1',
    },
  },
})
//end of section ui

function SignUp(props) {
    const signGoogle = () => {
        const provider = props.content.GoogleAuth
        props.content.GoogleAuth2.signInWithPopup(provider)
      }
    const classes = useStyles();
      return (
        <ThemeProvider theme = {theme}>
          <div className="logIn">
            <img className="logoLogIn" src={logo} alt="ChatApp" />
            <div className="LogoTitle">Chat / <p className="propColor">App</p></div>
            <div className="logInTitle">Log <p className="propColor">in</p> by</div>
            <img className="cityLogIn" src={city} alt="city" />
            <Button className={classes.button} onClick={signGoogle} variant="contained" color="secondary">
              Google
            </Button>
          </div>
        </ThemeProvider>
      )
}
export default SignUp