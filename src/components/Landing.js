import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignOutButton from './SignOut';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Landing(props) {
  const { classes } = props;
  return (<div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="title" color="white" className={classes.flex}>
            <Link to='/'>Home</Link>
          </Typography>
          <Button color="black"><Link to='/signin'>Sign In</Link></Button>
        </Toolbar>
      </AppBar>
    </div>

	  <div className="w3-container w3-center">
    <h1>Food Delivery Application</h1>
    <h2>Get Your Components</h2>
    <h3>Dr.V Perumaal</h3>
  </div></div>
  );
}




export default withStyles(styles)(Landing);
