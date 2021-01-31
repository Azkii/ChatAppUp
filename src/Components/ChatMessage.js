import React from 'react'
//framework React grid css import
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//
//bottom nav bar react ui
//
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper1: {
      maxWidth: 250,
      margin: `${theme.spacing(3)}px auto`,
      padding: theme.spacing(1.5),
      background: '#454b52',
      color: 'white',
      marginRight: '2.5vw',
      height: '5vh',
      fontFamily: "'Archivo', sans-serif",
    },
    paper2: {
      maxWidth: 250,
      margin: `${theme.spacing(3)}px auto`,
      padding: theme.spacing(1.5),
      background: '#5a6169',
      color: '#faa5c2',
      marginLeft: '2.5vw',
      height: '5vh',
      fontFamily: "'Archivo', sans-serif",
    }
  }));
// END of import 
function ChatMessage(props) {
    const classes = useStyles();
    const {text, uid, photoURL} = props.message
    const messageClass = uid === props.auth.currentUser.uid ? classes.paper1 : classes.paper2
    return (
          <div>
            <Paper className={`message ${messageClass}`}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>
                    <img className="icon" src={photoURL} alt={photoURL} />
                  </Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography noWrap>{text} </Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
    )
  }
export default ChatMessage
