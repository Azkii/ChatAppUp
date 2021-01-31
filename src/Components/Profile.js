import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {pink} from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
	backgroundColor: "#383d42",
	marginTop: "2vh",
	textAlign: "center",
    height: "75vh",
    width: "89vw",
  },
  paper2: {
	backgroundColor: "#383d42",
	marginTop: "2vh",
	textAlign: "center",
    height: "11vh",
    width: "89vw",
  },
  control: {
    padding: theme.spacing(2),
	},
	large: {
		marginTop: '4vh',
		marginLeft: '30vw',
    width: theme.spacing(15),
		height: theme.spacing(15),
		fontSize: "15vw",
		fontFamily: "Archivo, sans-serif;"
	},
	input: {
		marginTop: '5vh',
		color: 'white',
		width: "50vw",
	},
	input2: {
		marginTop: '3vh',
		color: 'white',
		width: "50vw",
		textAlign: 'center',
	},
	input4: {
		marginTop: '8vh',
		color: '#383d42',
		textAlign: 'center',
	},
}));
const theme = createMuiTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
			main: '#f48fb1',
		},
		primary: pink,
  },
})
function Profile(props) {
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
	const classes = useStyles();
    return (
			<div className="profileBody root">
				<ThemeProvider theme = {theme}>
					<Grid 
							container
							direction="column"
							justify="center"
							alignItems="center"
						>
						<Paper className={classes.paper2}>
							<h1 className="profileName">
								Profile
							</h1>
						</Paper>
					</Grid>
					<Grid 
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Paper className={classes.paper}>
							<Avatar alt="profilePhoto" src={props.content.auth.currentUser.photoURL} className={classes.large} />
							<Input
								className={classes.input}
								color="secondary"
								placeholder= "First name"
							/>
							<Input
								className={classes.input2}
								color="secondary"
								placeholder= "Last Name"
							/>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									className={classes.input2}
									color="secondary"
									format="MM/dd/yyyy"
									value={selectedDate}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
							</MuiPickersUtilsProvider>
							<div className={classes.input4} >
								<Button className="ButtonProfile" variant="contained" color="secondary">
									Save
								</Button>
							</div>
						</Paper>
					</Grid>
				</ThemeProvider>				
			</div>
    )
}

export default Profile