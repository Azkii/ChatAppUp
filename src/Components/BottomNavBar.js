import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles({
  root: {
		width: '100vw',
		backgroundColor: '#2b2f33',
	},
	icon: {
		color: '#ce8ba1',
	},
});
function BottomNavBar() {
	const classes = useStyles();
  const [value, setValue] = React.useState(0);
    return (
			<div className="bottomNavBar">
				<BottomNavigation
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					showLabels
					className={classes.root}>
					<BottomNavigationAction className={classes.icon} label="Chat" icon={<FavoriteIcon className={classes.icon} />} />
					<BottomNavigationAction className={classes.icon} label="App" icon={<FavoriteIcon className={classes.icon} />} />
				</BottomNavigation>
			</div>
    )
}
export default BottomNavBar