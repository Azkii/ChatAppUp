import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
			transform: 'rotate(-40deg)',
		},
  },
}));
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f48fb1',
    },
  },
})
function InputChat(props) {
	const classes = useStyles()
    return (
				<div className="InputChat">
					<ThemeProvider theme = {theme}>
						<form onSubmit={props.content.sendMessage}>
						<Input color="secondary" className='InputChatApp' style={{color:'white'}} placeholder="Write here!" inputProps={{ 'aria-label': 'description' }} value={props.content.formValue} onChange={(e) => props.content.setFormValue(e.target.value)} />
							
							<div className="buttonChat">
									<Fab  color="secondary" aria-label="add"  type="submit" className={classes.root} >
										<SendIcon/>
									</Fab>
							</div>
						</form>
					</ThemeProvider>
				</div>
    )
}
export default InputChat